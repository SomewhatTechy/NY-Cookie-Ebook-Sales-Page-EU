import sharp from 'sharp';
import { readFile, writeFile, mkdir } from 'fs/promises';
import { join, resolve } from 'path';

const dir = resolve('public/what-you-get');
const outDir = join(dir, '_recomp');
await mkdir(outDir, { recursive: true });

const langs = ['en', 'es', 'pt', 'fr', 'de', 'it', 'nl', 'pl'];
const variants = ['md', '']; // md = 768w, '' = full 1024w

for (const lang of langs) {
  for (const v of variants) {
    const suffix = v ? `-${v}` : '';
    const filename = `main-mockup-${lang}${suffix}.webp`;
    const src = join(dir, filename);
    const dst = join(outDir, filename);
    try {
      const buf = await readFile(src);
      const out = await sharp(buf).webp({ quality: 55 }).toBuffer();
      await writeFile(dst, out);
      console.log(`  ${filename}: ${buf.length} → ${out.length} (${Math.round((1 - out.length / buf.length) * 100)}% smaller)`);
    } catch (e) {
      console.warn(`  ⚠ Skipped ${filename}: ${e.message}`);
    }
  }
}

console.log('\n✅ Recompressed files in _recomp/');
