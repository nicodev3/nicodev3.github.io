#!/usr/bin/env node
/**
 * Script d'optimisation des images pour le web
 * Compresse PNG/JPG dans public/ (réduction de taille sans changement de format)
 * Usage: node scripts/optimize-images.mjs [--webp]
 *   --webp : convertit en WebP au lieu de compresser (remplace les fichiers)
 */
import sharp from 'sharp';
import { readdir, stat, writeFile, unlink } from 'fs/promises';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = join(__dirname, '..', 'public');

const EXTENSIONS = ['.png', '.jpg', '.jpeg'];
const MAX_WIDTH = 1920;
const JPEG_QUALITY = 82;
const WEBP_QUALITY = 82;

const webpMode = process.argv.includes('--webp');

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
  const outputPath = webpMode ? filePath.replace(/\.(png|jpg|jpeg)$/i, '.webp') : filePath;

  if (webpMode) {
    buffer = await pipeline
      .webp({ quality: WEBP_QUALITY })
      .toBuffer();
  } else if (ext === '.jpg' || ext === '.jpeg') {
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
  const relOutputPath = outputPath.replace(PUBLIC_DIR, '').replace(/\\/g, '/');

  // Ne pas écraser si la taille a augmenté (sauf en mode webp, toujours remplacer)
  if (!webpMode && sizeAfter >= sizeBefore) {
    return { path: relPath, before: sizeBefore, after: sizeBefore, saved: 0, skipped: true };
  }

  await writeFile(outputPath, buffer);
  if (webpMode && outputPath !== filePath) {
    await unlink(filePath);
  }

  return {
    path: webpMode ? relOutputPath : relPath,
    before: sizeBefore,
    after: sizeAfter,
    saved: parseFloat(saved),
    webp: webpMode,
  };
}

async function main() {
  console.log('🔍 Recherche des images dans public/...\n');
  const images = await findImages(PUBLIC_DIR);

  if (images.length === 0) {
    console.log('Aucune image trouvée.');
    return;
  }

  console.log(`📷 ${images.length} image(s) à ${webpMode ? 'convertir en WebP' : 'optimiser'}\n`);

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
