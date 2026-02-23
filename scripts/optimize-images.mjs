#!/usr/bin/env node
/**
 * Script d'optimisation des images pour le web
 * Compresse PNG/JPG dans public/ (réduction de taille sans changement de format)
 */
import sharp from 'sharp';
import { readdir, stat, writeFile } from 'fs/promises';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = join(__dirname, '..', 'public');

const EXTENSIONS = ['.png', '.jpg', '.jpeg'];
const MAX_WIDTH = 1920;
const JPEG_QUALITY = 82;

async function findImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const images = [];
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory() && !entry.name.startsWith('.')) {
      images.push(...(await findImages(fullPath)));
    } else if (entry.isFile() && EXTENSIONS.includes(extname(entry.name).toLowerCase())) {
      images.push(fullPath);
    }
  }
  return images;
}

async function optimizeImage(filePath) {
  const ext = extname(filePath).toLowerCase();
  const relPath = filePath.replace(PUBLIC_DIR, '').replace(/\\/g, '/');
  const info = await stat(filePath);
  const sizeBefore = info.size;

  let pipeline = sharp(filePath);
  const metadata = await pipeline.metadata();
  let { width, height } = metadata;

  if (!width || !height) return null;

  if (width > MAX_WIDTH) {
    const ratio = height / width;
    const newWidth = MAX_WIDTH;
    const newHeight = Math.round(MAX_WIDTH * ratio);
    pipeline = pipeline.resize(newWidth, newHeight, { fit: 'inside', withoutEnlargement: true });
  }

  let buffer;
  if (ext === '.jpg' || ext === '.jpeg') {
    buffer = await pipeline
      .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
      .toBuffer();
  } else if (ext === '.png') {
    buffer = await pipeline
      .png({ compressionLevel: 9 })
      .toBuffer();
  }

  if (!buffer) return null;

  const sizeAfter = buffer.length;
  const saved = ((1 - sizeAfter / sizeBefore) * 100).toFixed(1);

  // Ne pas écraser si la taille a augmenté
  if (sizeAfter >= sizeBefore) {
    return { path: relPath, before: sizeBefore, after: sizeBefore, saved: 0, skipped: true };
  }

  await writeFile(filePath, buffer);

  return {
    path: relPath,
    before: sizeBefore,
    after: sizeAfter,
    saved: parseFloat(saved),
  };
}

async function main() {
  console.log('🔍 Recherche des images dans public/...\n');
  const images = await findImages(PUBLIC_DIR);

  if (images.length === 0) {
    console.log('Aucune image trouvée.');
    return;
  }

  console.log(`📷 ${images.length} image(s) à optimiser\n`);

  let totalBefore = 0;
  let totalAfter = 0;

  for (const img of images) {
    try {
      const result = await optimizeImage(img);
      if (result) {
        totalBefore += result.before;
        totalAfter += result.after;
        if (result.skipped) {
          console.log(`  ○ ${result.path} (conservé, déjà optimisé)`);
        } else {
          const savedKb = ((result.before - result.after) / 1024).toFixed(0);
          console.log(`  ✓ ${result.path}`);
          console.log(`    ${(result.before / 1024).toFixed(0)} KB → ${(result.after / 1024).toFixed(0)} KB (-${result.saved}%, -${savedKb} KB)`);
        }
      }
    } catch (err) {
      console.error(`  ✗ ${img}: ${err.message}`);
    }
  }

  const totalSaved = ((1 - totalAfter / totalBefore) * 100).toFixed(1);
  const totalSavedKb = ((totalBefore - totalAfter) / 1024).toFixed(0);
  console.log('\n' + '─'.repeat(50));
  console.log(`Total: ${(totalBefore / 1024).toFixed(0)} KB → ${(totalAfter / 1024).toFixed(0)} KB (-${totalSaved}%, -${totalSavedKb} KB économisés)`);
}

main().catch(console.error);
