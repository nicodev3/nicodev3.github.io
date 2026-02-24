#!/usr/bin/env node
/**
 * Convertit les captures d'écran PNG/JPG en WebP
 * et met à jour les références dans portfolio.astro
 *
 * Usage: node scripts/convert-screenshots-webp.mjs
 */
import sharp from 'sharp';
import { readdir, stat, writeFile, unlink, readFile } from 'fs/promises';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SCREENSHOTS_DIR = join(__dirname, '..', 'public', 'images', 'screenshots');
const PORTFOLIO_PATH = join(__dirname, '..', 'src', 'pages', 'portfolio.astro');

const EXTENSIONS = ['.png', '.jpg', '.jpeg'];
const WEBP_QUALITY = 82;

async function main() {
  console.log('🖼️  Conversion des captures en WebP...\n');

  const entries = await readdir(SCREENSHOTS_DIR, { withFileTypes: true });
  const images = entries
    .filter((e) => e.isFile() && EXTENSIONS.includes(extname(e.name).toLowerCase()))
    .map((e) => join(SCREENSHOTS_DIR, e.name));

  if (images.length === 0) {
    console.log('Aucune image PNG/JPG à convertir dans screenshots/');
    return;
  }

  const conversions = [];
  for (const filePath of images) {
    try {
      const info = await stat(filePath);
      const sizeBefore = info.size;
      const baseName = filePath.replace(/\.[^.]+$/, '');
      const webpPath = baseName + '.webp';

      await sharp(filePath).webp({ quality: WEBP_QUALITY }).toFile(webpPath);
      const sizeAfter = (await stat(webpPath)).size;
      await unlink(filePath);

      const saved = ((1 - sizeAfter / sizeBefore) * 100).toFixed(1);
      const fileName = filePath.split(/[/\\]/).pop();
      const webpFileName = webpPath.split(/[/\\]/).pop();

      conversions.push({ from: fileName, to: webpFileName, before: sizeBefore, after: sizeAfter, saved: parseFloat(saved) });
      console.log(`  ✓ ${fileName} → ${webpFileName} (-${saved}%)`);
    } catch (err) {
      console.error(`  ✗ ${filePath}: ${err.message}`);
    }
  }

  // Mise à jour de portfolio.astro
  let portfolioContent = await readFile(PORTFOLIO_PATH, 'utf-8');
  portfolioContent = portfolioContent
    .replace(/\.png"/g, '.webp"')
    .replace(/\.jpg"/g, '.webp"')
    .replace(/\.jpeg"/g, '.webp"');

  await writeFile(PORTFOLIO_PATH, portfolioContent);
  console.log('\n📝 Références mises à jour dans portfolio.astro');

  const totalBefore = conversions.reduce((s, c) => s + c.before, 0);
  const totalAfter = conversions.reduce((s, c) => s + c.after, 0);
  const totalSaved = ((1 - totalAfter / totalBefore) * 100).toFixed(1);
  console.log(`\n─`.repeat(30));
  console.log(`Total: ${(totalBefore / 1024).toFixed(0)} KB → ${(totalAfter / 1024).toFixed(0)} KB (-${totalSaved}%)`);
}

main().catch(console.error);
