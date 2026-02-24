#!/usr/bin/env node
/**
 * Capture une capture d'écran d'un site web avec Puppeteer.
 * Usage: node scripts/screenshot-site.mjs <url> [outputPath]
 */

import puppeteer from 'puppeteer';
import { mkdir, writeFile } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const url = process.argv[2] || 'https://cecilecoaching.fr/';
const outputPath = process.argv[3] || join(__dirname, '..', 'public', 'images', 'screenshots', 'cecilecoaching.fr.webp');

async function main() {
	await mkdir(dirname(outputPath), { recursive: true });

	const browser = await puppeteer.launch({
		headless: true,
		args: ['--no-sandbox', '--disable-setuid-sandbox']
	});

	try {
		const page = await browser.newPage();
		await page.setViewport({ width: 1280, height: 800 });
		await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
		await page.screenshot({ path: outputPath, type: 'webp', quality: 80, fullPage: false });
		console.log(`Capture enregistrée : ${outputPath}`);
	} finally {
		await browser.close();
	}
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
