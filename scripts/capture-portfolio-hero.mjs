#!/usr/bin/env node
/**
 * Capture portfolio — header + hero en pleine largeur (texte à gauche, photo à droite).
 * Usage: node scripts/capture-portfolio-hero.mjs <url> <outputPath>
 */
import puppeteer from 'puppeteer';
import sharp from 'sharp';
import { mkdir } from 'fs/promises';
import { dirname } from 'path';

const url = process.argv[2];
const outputPath = process.argv[3];
const OUT_W = 1020;
/** Viewport ≥ 1024px pour conserver le hero deux colonnes (lg). */
const VIEWPORT_W = 1280;
const VIEWPORT_H = 960;

if (!url || !outputPath) {
	console.error('Usage: node scripts/capture-portfolio-hero.mjs <url> <outputPath>');
	process.exit(1);
}

const browser = await puppeteer.launch({
	headless: true,
	args: ['--no-sandbox', '--disable-setuid-sandbox'],
});
try {
	await mkdir(dirname(outputPath), { recursive: true });
	const page = await browser.newPage();
	await page.setViewport({ width: VIEWPORT_W, height: VIEWPORT_H, deviceScaleFactor: 1 });
	await page.goto(url, { waitUntil: 'networkidle0', timeout: 45000 });

	await page.evaluate(async () => {
		const imgs = [...document.querySelectorAll('img')];
		await Promise.all(
			imgs.map(
				(img) =>
					new Promise((resolve) => {
						if (img.complete && img.naturalWidth > 0) return resolve();
						img.addEventListener('load', resolve, { once: true });
						img.addEventListener('error', resolve, { once: true });
						setTimeout(resolve, 8000);
					}),
			),
		);
	});
	await new Promise((r) => setTimeout(r, 500));

	const clip = await page.evaluate(() => {
		const header = document.querySelector('header');
		const hero = document.querySelector('section.hero-gradient');
		if (!hero) return null;
		const top = Math.max(0, header?.getBoundingClientRect().top ?? hero.getBoundingClientRect().top);
		const bottom = hero.getBoundingClientRect().bottom;
		return {
			x: 0,
			y: Math.floor(top),
			width: Math.floor(document.documentElement.clientWidth),
			height: Math.ceil(bottom - top),
		};
	});

	if (!clip) throw new Error('Section hero introuvable');

	const raw = await page.screenshot({ type: 'png', clip });
	await sharp(raw)
		.resize(OUT_W, null, { withoutEnlargement: false })
		.webp({ quality: 88 })
		.toFile(outputPath);

	const meta = await sharp(outputPath).metadata();
	console.log(
		`Capture ${meta.width}×${meta.height} (clip ${clip.width}×${clip.height}) : ${outputPath}`,
	);
} finally {
	await browser.close();
}
