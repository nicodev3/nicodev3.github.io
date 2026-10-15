import assert from 'node:assert/strict';
import puppeteer from 'puppeteer';

// Run after build, with `npm run preview -- --host 127.0.0.1` running.
const origin = process.argv[2] || 'http://127.0.0.1:4321';
const browser = await puppeteer.launch({
  executablePath: process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: true,
});
try {
  const page = await browser.newPage();
  await page.setRequestInterception(true);
  page.on('request', request => {
    if (request.url().startsWith(origin) || request.url().startsWith('data:')) return request.continue();
    return request.respond({ status: 200, body: '' });
  });
  for (const width of [320, 768, 1024, 1280]) {
    await page.setViewport({ width, height: 900 });
    await page.goto(`${origin}/contact/`, { waitUntil: 'networkidle0' });
    const geometry = await page.evaluate(() => {
      const range = document.createRange();
      range.selectNodeContents(document.querySelector('h1'));
      return {
        overflow: document.documentElement.scrollWidth > innerWidth,
        titleFits: [...range.getClientRects()].every(rect => rect.left >= 0 && rect.right <= innerWidth),
      };
    });
    assert.equal(geometry.overflow, false, `Horizontal overflow at ${width}px`);
    assert.equal(geometry.titleFits, true, `Clipped title at ${width}px`);
  }
  await page.evaluate(() => { document.documentElement.style.fontSize = '200%'; });
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true, 'Overflow with enlarged text');
  await page.waitForSelector('[data-mobile-nav-toggle]', { visible: true });
  await page.evaluate(() => { const sentinel = document.createElement('div'); sentinel.id = 'inert-sentinel'; sentinel.inert = true; document.body.append(sentinel); });
  await page.click('[data-mobile-nav-toggle]');
  await page.waitForFunction(() => document.querySelector('[data-mobile-nav-toggle]').getAttribute('aria-expanded') === 'true');
  assert.equal(await page.evaluate(() => document.activeElement.hasAttribute('data-mobile-nav-close')), true);
  assert.equal(await page.$eval('main', element => Boolean(element.closest('[inert]'))), true, 'Modal menu must isolate the background');
  await page.keyboard.press('Escape');
  assert.equal(await page.$eval('main', element => Boolean(element.closest('[inert]'))), false, 'Closing menu must restore background interaction');
  assert.equal(await page.$eval('#inert-sentinel', element => element.inert), true, 'Pre-existing inert state must be preserved');
  assert.equal(await page.evaluate(() => document.activeElement.hasAttribute('data-mobile-nav-toggle')), true);

  await page.goto(origin, { waitUntil: 'networkidle0' });
  await page.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);
  const image = await page.$('main article a img');
  await image.hover();
  assert.equal(await image.evaluate(element => getComputedStyle(element).scale), 'none', 'Portfolio hover should not scale in reduced motion');
  await page.$eval('[data-testimonials-carousel-next]', element => element.focus());
  await page.keyboard.press('Enter');
  await page.waitForFunction(() => document.querySelector('[data-testimonials-carousel-track]').scrollLeft > 0);
  const position = await page.$eval('[data-testimonials-carousel-track]', element => element.scrollLeft);
  await new Promise(resolve => setTimeout(resolve, 100));
  assert.equal(await page.$eval('[data-testimonials-carousel-track]', element => element.scrollLeft), position, 'Reduced-motion carousel should settle immediately');
  const targets = await page.$$eval('[data-testimonials-carousel-dots] button', elements => elements.map(element => {
    const rect = element.getBoundingClientRect();
    return rect.width >= 24 && rect.height >= 24;
  }));
  assert.ok(targets.length && targets.every(Boolean), 'Pagination hit areas must be at least 24px');
  await page.goto(`${origin}/blog/combien-coute-site-internet-2026/`, { waitUntil: 'networkidle0' });
  await page.setViewport({ width: 320, height: 900 });
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true, 'Article tables must not widen the page');
  const table = await page.$('.article-table-scroll');
  assert.ok(table, 'Article tables must have a scrollable region');
  await table.focus();
  await page.keyboard.press('ArrowRight');
  await page.waitForFunction(() => document.querySelector('.article-table-scroll').scrollLeft > 0);
  await page.goto(origin, { waitUntil: 'networkidle0' });
  const amount = await page.$('article header .tabular-nums');
  assert.equal(await amount.evaluate(element => getComputedStyle(element).fontVariantNumeric), 'tabular-nums');
  const cookieText = await page.$('#tarteaucitronDisclaimerAlert');
  if (cookieText) {
    const initialSize = await cookieText.evaluate(element => parseFloat(getComputedStyle(element).fontSize));
    await page.evaluate(() => { document.documentElement.style.fontSize = '200%'; });
    assert.equal(await cookieText.evaluate(element => parseFloat(getComputedStyle(element).fontSize)), initialSize * 2, 'Cookie text must follow enlarged browser text');
  }
  for (const route of ['/', '/tarifs/', '/diagnostic-gratuit/', '/merci/diagnostic/']) {
    for (const width of [320, 1280]) {
      await page.setViewport({ width, height: 900 });
      await page.goto(`${origin}${route}`, { waitUntil: 'networkidle0' });
      for (const size of ['100%', '200%']) {
        await page.evaluate(size => { document.documentElement.style.fontSize = size; }, size);
        assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true, `${route} overflows at ${width}px with ${size} text`);
        assert.equal(await page.$eval('h1', element => {
          const range = document.createRange();
          range.selectNodeContents(element);
          return [...range.getClientRects()].every(rect => rect.left >= 0 && rect.right <= innerWidth);
        }), true, `${route} title clipped at ${width}px with ${size} text`);
      }
    }
  }
  await page.goto(`${origin}/diagnostic-gratuit/`, { waitUntil: 'networkidle0' });
  const cdp = await page.createCDPSession();
  await cdp.send('Emulation.setEmulatedMedia', { features: [{ name: 'forced-colors', value: 'active' }] });
  for (const selector of ['#diagnostic-firstName', 'button[type="submit"]', 'a.bg-whatsapp']) {
    await page.$eval(selector, element => element.focus());
    assert.equal(await page.$eval(selector, element => {
      const style = getComputedStyle(element);
      return element.matches(':focus-visible') && style.outlineStyle !== 'none' && parseFloat(style.outlineWidth) >= 2;
    }), true, `${selector} needs a visible outline in forced colors`);
  }
  await cdp.detach();
  console.log('PASS: complete diagnostic journey at 100%/200% text, forced-colors focus, menu isolation and restoration.');
  console.log('PASS: narrow layouts, enlarged text, menu keyboard/focus, reduced motion and pagination targets. External requests mocked.');
} finally {
  await browser.close();
}
