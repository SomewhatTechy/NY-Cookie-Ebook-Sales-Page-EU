import sharp from 'sharp';
import path from 'path';
import fs from 'fs/promises';

const TESTIMONIALS_DIR = './public/testimonials';
const MOCKUP_DIR = './public/what-you-get';
const AVATAR_SIZE = 96; // 2x retina for 48px display
const AVATAR_QUALITY = 80;
const MOCKUP_XS_SIZE = 384;
const MOCKUP_QUALITY = 82;

async function resizeTestimonials() {
  console.log('--- Resizing testimonial avatars ---');
  const outDir = path.join(TESTIMONIALS_DIR, '_resized');
  await fs.mkdir(outDir, { recursive: true });
  const files = await fs.readdir(TESTIMONIALS_DIR);
  for (const file of files.filter(f => f.endsWith('.webp'))) {
    const filePath = path.join(TESTIMONIALS_DIR, file);
    const meta = await sharp(filePath).metadata();
    const oldSize = (await fs.stat(filePath)).size;
    if (meta.width > AVATAR_SIZE) {
      const outPath = path.join(outDir, file);
      await sharp(filePath)
        .resize(AVATAR_SIZE, AVATAR_SIZE, { fit: 'cover' })
        .webp({ quality: AVATAR_QUALITY })
        .toFile(outPath);
      const newSize = (await fs.stat(outPath)).size;
      console.log(`  ${file}: ${meta.width}x${meta.height} (${(oldSize/1024).toFixed(1)}KB) -> ${AVATAR_SIZE}x${AVATAR_SIZE} (${(newSize/1024).toFixed(1)}KB)`);
    } else {
      console.log(`  ${file}: already ${meta.width}x${meta.height}, skipping`);
    }
  }
  console.log(`\n  Resized files in: ${outDir}`);
  console.log('  >> Run: mv public/testimonials/_resized/* public/testimonials/ && rmdir public/testimonials/_resized');
}

async function generateMockupXs() {
  console.log('\n--- Generating 384w mockup variants ---');
  const langs = ['en', 'es', 'pt', 'fr', 'de', 'it', 'nl', 'pl'];
  for (const lang of langs) {
    const src = path.join(MOCKUP_DIR, `main-mockup-${lang}.webp`);
    const dst = path.join(MOCKUP_DIR, `main-mockup-${lang}-xs.webp`);
    try {
      await fs.access(src);
    } catch {
      console.log(`  main-mockup-${lang}.webp: source not found, skipping`);
      continue;
    }
    const meta = await sharp(src).metadata();
    await sharp(src)
      .resize(MOCKUP_XS_SIZE, MOCKUP_XS_SIZE, { fit: 'cover' })
      .webp({ quality: MOCKUP_QUALITY })
      .toFile(dst);
    const newSize = (await fs.stat(dst)).size;
    console.log(`  main-mockup-${lang}-xs.webp: ${meta.width}x${meta.height} -> ${MOCKUP_XS_SIZE}x${MOCKUP_XS_SIZE} (${(newSize/1024).toFixed(1)}KB)`);
  }
}

await resizeTestimonials();
await generateMockupXs();
console.log('\nDone!');
