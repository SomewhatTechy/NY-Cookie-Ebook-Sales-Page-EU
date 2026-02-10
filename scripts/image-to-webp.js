import sharp from 'sharp';
import chokidar from 'chokidar';
import fs from 'fs/promises';
import path from 'path';

const CONFIG = {
  watchDir: './',
  quality: 90,
  extensions: ['.jpg', '.jpeg', '.png', '.gif'],
  deleteOriginal: true,
  ignorePatterns: ['node_modules/**', '.git/**', 'dist/**', 'build/**', '.vite/**']
};

class ConversionQueue {
  constructor() { this.queue = []; this.isProcessing = false; }
  add(filePath) { if (!this.queue.includes(filePath)) { this.queue.push(filePath); this.process(); } }
  async process() {
    if (this.isProcessing || this.queue.length === 0) return;
    this.isProcessing = true;
    const filePath = this.queue.shift();
    try { await convertToWebp(filePath); } catch (error) { console.error(`Error: ${filePath}:`, error.message); }
    this.isProcessing = false;
    if (this.queue.length > 0) this.process();
  }
}

const queue = new ConversionQueue();

async function convertToWebp(inputPath) {
  const ext = path.extname(inputPath).toLowerCase();
  const baseName = path.basename(inputPath, ext);
  const dirName = path.dirname(inputPath);
  const outputPath = path.join(dirName, `${baseName}.webp`);
  if (ext === '.webp') return;
  try { await fs.access(outputPath); console.log(`Skip ${inputPath} - WebP exists`); return; } catch {}
  console.log(`Converting: ${inputPath}`);
  const startTime = Date.now();
  try {
    const originalStats = await fs.stat(inputPath);
    await sharp(inputPath).webp({ quality: CONFIG.quality }).toFile(outputPath);
    const newStats = await fs.stat(outputPath);
    const savings = ((originalStats.size - newStats.size) / originalStats.size * 100).toFixed(1);
    console.log(`Created: ${outputPath} (${savings}% smaller)`);
    if (CONFIG.deleteOriginal) { await fs.unlink(inputPath); console.log(`Deleted: ${inputPath}`); }
  } catch (error) { console.error(`Failed: ${inputPath}:`, error.message); try { await fs.unlink(outputPath); } catch {} }
}

function shouldProcess(filePath) { return CONFIG.extensions.includes(path.extname(filePath).toLowerCase()); }

function startWatcher() {
  console.log('IMAGE TO WEBP - Watching for new images... (Ctrl+C to stop)');
  const watcher = chokidar.watch(CONFIG.watchDir, {
    ignored: CONFIG.ignorePatterns, persistent: true, ignoreInitial: true,
    awaitWriteFinish: { stabilityThreshold: 500, pollInterval: 100 }
  });
  watcher.on('add', (filePath) => { if (shouldProcess(filePath)) queue.add(filePath); });
  process.on('SIGINT', () => { console.log('Stopping...'); watcher.close(); process.exit(0); });
}

async function batchConvert() {
  console.log('BATCH MODE - Converting existing images...');
  const files = await fs.readdir(CONFIG.watchDir);
  for (const file of files.filter(f => shouldProcess(f))) await convertToWebp(path.join(CONFIG.watchDir, file));
  console.log('Done!');
}

if (process.argv.includes('--batch')) batchConvert(); else startWatcher();
