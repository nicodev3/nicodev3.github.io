#!/usr/bin/env node
/**
 * Capture une capture d'écran d'un site web avec Puppeteer.
 * Usage: node scripts/screenshot-site.mjs <url> [outputPath] [--mobile]
 *
 * Par défaut : bureau 1280×800. Avec --mobile : téléphone 390×844 (rendu à 2×, en-tête et premier écran).
 */

import puppeteer from 'puppeteer';
import { mkdir } from 'fs/promises';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const args = process.argv.slice(2);
const mobile = args.includes('--mobile');
const [url = 'https://cecilecoaching.fr/', outputArg] = args.filter((arg) => arg !== '--mobile');
const outputPath = outputArg || join(__dirname, '..', 'public', 'images', 'screenshots', 'cecilecoaching.fr.webp');

const MOBILE_USER_AGENT =
	'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1';

async function main() {
	await mkdir(dirname(outputPath), { recursive: true });

	const browser = await puppeteer.launch({
		headless: true,
		args: ['--no-sandbox', '--disable-setuid-sandbox']
	});

	try {
		const page = await browser.newPage();
		if (mobile) {
			await page.setUserAgent(MOBILE_USER_AGENT);
			await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
		} else {
			await page.setViewport({ width: 1280, height: 800 });
		}
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
