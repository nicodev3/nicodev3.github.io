import assert from 'node:assert/strict';
import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({ executablePath: process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true });
try {
  const page = await browser.newPage();
  const google = [];
  const failures = [];
  page.on('pageerror', error => failures.push(error.message));
  page.on('response', response => { if (response.status() >= 400) failures.push(`${response.status()} ${response.url()}`); });
  await page.setRequestInterception(true);
  page.on('request', request => {
    if (/googletagmanager|google-analytics/.test(request.url())) {
      google.push(request.url());
      return request.respond({ status: 200, contentType: 'application/javascript', body: '' });
    }
    return request.continue();
  });
  await page.goto('http://127.0.0.1:4321/', { waitUntil: 'networkidle0' });
  await page.waitForSelector('#tarteaucitronAllDenied2', { visible: true });
  assert.equal(google.length, 0, 'Google must not load before consent');
  await page.click('#tarteaucitronAllDenied2');
  await page.reload({ waitUntil: 'networkidle0' });
  assert.equal(google.length, 0, 'Google must not load after rejection or reload');
  await page.evaluate(() => window.tarteaucitron.userInterface.openPanel());
  await page.waitForSelector('#gtagAllowed', { visible: true });
  await page.click('#gtagAllowed');
  await page.waitForFunction(() => typeof window.gtag === 'function');
  assert.equal(google.length, 1, 'Exactly one Google script after consent');
  assert.ok(await page.evaluate(() => window.dataLayer.some(entry => entry[0] === 'config' && entry[1].startsWith('G-'))));
  await page.click('#gtagDenied');
  await page.reload({ waitUntil: 'networkidle0' });
  assert.equal(google.length, 1, 'No Google script after withdrawal and reload');
  assert.deepEqual(failures, []);
  console.log('PASS: banner, no Google before consent, rejection persistence, acceptance, GA4 config, withdrawal, no JS/HTTP errors. Google requests mocked.');
} finally {
  await browser.close();
}
