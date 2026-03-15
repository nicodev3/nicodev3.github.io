import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const outputPath = path.join(rootDir, 'public', 'images', 'premiers-patients-psychologue.webp');

const html = `<!doctype html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <style>
    :root {
      --bg: #efe8de;
      --sage: #aab9ae;
      --sage-dark: #6b8075;
      --sand: #d7c4af;
      --wood: #a78362;
      --ink: #31413a;
      --cream: #fbf8f3;
    }

    * { box-sizing: border-box; }
    html, body {
      margin: 0;
      width: 1200px;
      height: 630px;
      overflow: hidden;
      font-family: Georgia, "Times New Roman", serif;
      background: linear-gradient(140deg, #ebe5dc 0%, #dbe3dd 100%);
    }

    body {
      position: relative;
      color: var(--ink);
    }

    .grain,
    .vignette,
    .light,
    .bokeh {
      position: absolute;
      inset: 0;
      pointer-events: none;
    }

    .grain {
      opacity: .08;
      background-image:
        radial-gradient(circle at 20% 20%, rgba(255,255,255,.8) 0 1px, transparent 1px),
        radial-gradient(circle at 80% 40%, rgba(0,0,0,.6) 0 1px, transparent 1px),
        radial-gradient(circle at 30% 75%, rgba(0,0,0,.5) 0 1px, transparent 1px),
        radial-gradient(circle at 60% 15%, rgba(255,255,255,.7) 0 1px, transparent 1px);
      background-size: 13px 13px, 17px 17px, 19px 19px, 23px 23px;
      mix-blend-mode: multiply;
    }

    .vignette {
      background: radial-gradient(circle at center, transparent 48%, rgba(45, 56, 49, .18) 100%);
    }

    .light {
      background:
        radial-gradient(circle at 15% 18%, rgba(255,255,255,.92) 0, rgba(255,255,255,.35) 17%, transparent 42%),
        radial-gradient(circle at 70% 80%, rgba(255,244,225,.25) 0, transparent 38%);
      filter: blur(8px);
    }

    .bokeh::before,
    .bokeh::after {
      content: "";
      position: absolute;
      border-radius: 999px;
      filter: blur(22px);
    }

    .bokeh::before {
      width: 190px;
      height: 190px;
      right: 60px;
      top: 40px;
      background: rgba(240, 222, 201, .8);
    }

    .bokeh::after {
      width: 220px;
      height: 220px;
      left: -30px;
      bottom: -40px;
      background: rgba(192, 210, 198, .6);
    }

    .scene {
      position: absolute;
      inset: 0;
    }

    .wall {
      position: absolute;
      inset: 0 0 115px 0;
      background:
        linear-gradient(180deg, rgba(255,255,255,.5), rgba(255,255,255,0) 30%),
        linear-gradient(90deg, rgba(255,255,255,.16), transparent 30%, rgba(255,255,255,.2) 75%, transparent 100%),
        linear-gradient(180deg, #efebe4 0%, #dddcd6 100%);
    }

    .window {
      position: absolute;
      left: 102px;
      top: 84px;
      width: 262px;
      height: 276px;
      border-radius: 28px;
      background:
        linear-gradient(180deg, rgba(255,255,255,.92) 0%, rgba(244,241,234,.92) 100%);
      box-shadow:
        inset 0 0 0 10px rgba(255,255,255,.38),
        0 24px 60px rgba(90, 99, 88, .16);
      overflow: hidden;
      opacity: .92;
    }

    .window::before {
      content: "";
      position: absolute;
      inset: 0;
      background:
        linear-gradient(90deg, transparent 49%, rgba(192, 196, 186, .6) 49%, rgba(192, 196, 186, .6) 51%, transparent 51%),
        linear-gradient(180deg, transparent 56%, rgba(192, 196, 186, .55) 56%, rgba(192, 196, 186, .55) 58%, transparent 58%);
    }

    .window::after {
      content: "";
      position: absolute;
      inset: -10% -15%;
      background:
        radial-gradient(circle at 30% 30%, rgba(255,255,255,.75), transparent 20%),
        linear-gradient(180deg, rgba(203, 216, 208, .55), rgba(165, 187, 173, .38));
      filter: blur(12px);
    }

    .plant {
      position: absolute;
      left: 50px;
      top: 280px;
      width: 160px;
      height: 220px;
      filter: blur(.2px);
    }

    .pot {
      position: absolute;
      left: 30px;
      bottom: 0;
      width: 98px;
      height: 82px;
      border-radius: 14px 14px 30px 30px;
      background: linear-gradient(180deg, #b38b68 0%, #8e6b50 100%);
      box-shadow: 0 16px 24px rgba(77, 59, 43, .2);
    }

    .leaf {
      position: absolute;
      border-radius: 100% 0 100% 0;
      background: linear-gradient(180deg, #859f8f 0%, #5f7c6d 100%);
      transform-origin: bottom center;
      box-shadow: inset -6px -10px 16px rgba(31, 58, 47, .12);
      opacity: .95;
    }

    .leaf.l1 { width: 44px; height: 120px; left: 48px; top: 35px; transform: rotate(-18deg); }
    .leaf.l2 { width: 40px; height: 108px; left: 86px; top: 22px; transform: rotate(8deg); }
    .leaf.l3 { width: 36px; height: 92px; left: 14px; top: 72px; transform: rotate(-36deg); }
    .leaf.l4 { width: 40px; height: 105px; left: 96px; top: 88px; transform: rotate(28deg); }
    .leaf.l5 { width: 33px; height: 84px; left: 52px; top: 90px; transform: rotate(3deg); }

    .frame {
      position: absolute;
      top: 96px;
      right: 178px;
      width: 162px;
      height: 198px;
      border-radius: 18px;
      background: linear-gradient(180deg, #f7f4ef, #efe9de);
      box-shadow:
        inset 0 0 0 10px rgba(166, 147, 124, .25),
        0 18px 36px rgba(81, 79, 62, .14);
      overflow: hidden;
    }

    .frame::before {
      content: "";
      position: absolute;
      inset: 22px;
      border-radius: 10px;
      background:
        radial-gradient(circle at 50% 26%, rgba(128, 156, 141, .35) 0 18%, transparent 19%),
        linear-gradient(180deg, rgba(237, 242, 238, .8), rgba(215, 224, 219, .6));
      opacity: .9;
    }

    .frame::after {
      content: "";
      position: absolute;
      left: 44px;
      bottom: 36px;
      width: 72px;
      height: 68px;
      border-radius: 50% 50% 18% 18%;
      background: rgba(105, 128, 116, .45);
      filter: blur(2px);
    }

    .sofa {
      position: absolute;
      right: 88px;
      bottom: 118px;
      width: 412px;
      height: 180px;
      border-radius: 42px 42px 24px 24px;
      background: linear-gradient(180deg, #c7b29c 0%, #ab8e74 100%);
      box-shadow:
        inset 0 -18px 28px rgba(120, 86, 58, .18),
        0 24px 40px rgba(82, 61, 43, .2);
      filter: saturate(.92);
    }

    .sofa::before,
    .sofa::after {
      content: "";
      position: absolute;
      top: 44px;
      width: 100px;
      height: 78px;
      border-radius: 28px;
      background: rgba(249, 244, 236, .36);
      filter: blur(.4px);
    }

    .sofa::before { left: 42px; }
    .sofa::after { right: 42px; }

    .seat {
      position: absolute;
      inset: 82px 30px 28px;
      border-radius: 24px;
      background: rgba(146, 110, 82, .25);
    }

    .table {
      position: absolute;
      left: 450px;
      bottom: 96px;
      width: 230px;
      height: 112px;
      border-radius: 999px;
      background: radial-gradient(circle at 35% 28%, #dbb998 0%, #b88e69 68%, #9f795a 100%);
      box-shadow: 0 28px 34px rgba(79, 55, 39, .24);
      transform: rotate(-8deg);
    }

    .table::before {
      content: "";
      position: absolute;
      left: 103px;
      top: 60px;
      width: 19px;
      height: 132px;
      border-radius: 10px;
      background: linear-gradient(180deg, #9a7659, #765840);
      box-shadow: 0 30px 35px rgba(72, 49, 34, .22);
    }

    .mug {
      position: absolute;
      left: 104px;
      top: 26px;
      width: 34px;
      height: 42px;
      border-radius: 10px 10px 14px 14px;
      background: linear-gradient(180deg, #f9f7f2 0%, #e9e3d8 100%);
      box-shadow: 0 10px 14px rgba(89, 68, 50, .12);
    }

    .mug::before {
      content: "";
      position: absolute;
      right: -11px;
      top: 11px;
      width: 12px;
      height: 14px;
      border: 4px solid #ece4d8;
      border-left: none;
      border-radius: 0 10px 10px 0;
    }

    .notebook {
      position: absolute;
      left: 145px;
      top: 24px;
      width: 54px;
      height: 68px;
      border-radius: 6px;
      background: linear-gradient(180deg, #f7f3ec, #eee5d8);
      transform: rotate(14deg);
      box-shadow: 0 10px 14px rgba(89, 68, 50, .12);
    }

    .notebook::before {
      content: "";
      position: absolute;
      left: 8px;
      top: 10px;
      width: 38px;
      height: 2px;
      background: rgba(111, 126, 117, .22);
      box-shadow: 0 10px 0 rgba(111, 126, 117, .18), 0 20px 0 rgba(111, 126, 117, .18);
    }

    .person {
      position: absolute;
      left: 595px;
      bottom: 118px;
      width: 168px;
      height: 286px;
      filter: blur(.25px);
    }

    .person .body {
      position: absolute;
      left: 30px;
      bottom: 0;
      width: 108px;
      height: 178px;
      border-radius: 46px 46px 18px 18px;
      background: linear-gradient(180deg, #8ea192 0%, #64786d 100%);
      box-shadow: 0 26px 30px rgba(57, 72, 64, .18);
    }

    .person .body::before {
      content: "";
      position: absolute;
      left: 26px;
      top: 34px;
      width: 56px;
      height: 74px;
      border-radius: 28px;
      background: rgba(241, 235, 225, .2);
    }

    .person .head {
      position: absolute;
      left: 56px;
      top: 18px;
      width: 66px;
      height: 78px;
      border-radius: 40px;
      background: linear-gradient(180deg, #e1c1a5 0%, #d0aa88 100%);
      box-shadow: inset 0 -10px 12px rgba(132, 83, 47, .08);
      z-index: 2;
    }

    .person .hair {
      position: absolute;
      left: 46px;
      top: 4px;
      width: 88px;
      height: 92px;
      border-radius: 46px;
      background: linear-gradient(180deg, #6a5548 0%, #4c3a31 100%);
      z-index: 3;
    }

    .person .hair::before {
      content: "";
      position: absolute;
      left: 14px;
      top: 42px;
      width: 60px;
      height: 42px;
      border-radius: 0 0 34px 34px;
      background: #4c3a31;
    }

    .person .arm {
      position: absolute;
      width: 28px;
      height: 112px;
      border-radius: 18px;
      background: linear-gradient(180deg, #d8b394 0%, #c79d79 100%);
      z-index: 1;
      transform-origin: top center;
    }

    .person .arm.left { left: 18px; top: 112px; transform: rotate(22deg); }
    .person .arm.right { right: 8px; top: 110px; transform: rotate(-28deg); }

    .person .leg {
      position: absolute;
      width: 38px;
      height: 120px;
      bottom: -10px;
      border-radius: 20px;
      background: linear-gradient(180deg, #7f6656 0%, #665044 100%);
    }

    .person .leg.left { left: 52px; transform: rotate(8deg); }
    .person .leg.right { left: 92px; transform: rotate(-7deg); }

    .floor {
      position: absolute;
      left: -40px;
      right: -40px;
      bottom: -28px;
      height: 170px;
      background:
        linear-gradient(180deg, rgba(255,255,255,.15), transparent 26%),
        linear-gradient(180deg, #b79170 0%, #977457 100%);
      transform: perspective(900px) rotateX(66deg);
      transform-origin: top center;
    }

    .floor::before {
      content: "";
      position: absolute;
      inset: 0;
      background:
        linear-gradient(90deg, transparent 0 8%, rgba(86, 56, 34, .14) 8% 8.7%, transparent 8.7% 16%,
          rgba(86, 56, 34, .14) 16% 16.7%, transparent 16.7% 24%, rgba(86, 56, 34, .14) 24% 24.7%,
          transparent 24.7% 32%, rgba(86, 56, 34, .14) 32% 32.7%, transparent 32.7% 40%, rgba(86, 56, 34, .14) 40% 40.7%,
          transparent 40.7% 48%, rgba(86, 56, 34, .14) 48% 48.7%, transparent 48.7% 56%, rgba(86, 56, 34, .14) 56% 56.7%,
          transparent 56.7% 64%, rgba(86, 56, 34, .14) 64% 64.7%, transparent 64.7% 72%, rgba(86, 56, 34, .14) 72% 72.7%,
          transparent 72.7% 80%, rgba(86, 56, 34, .14) 80% 80.7%, transparent 80.7% 88%, rgba(86, 56, 34, .14) 88% 88.7%, transparent 88.7%);
      opacity: .55;
    }

    .shadow {
      position: absolute;
      border-radius: 999px;
      background: rgba(61, 53, 43, .18);
      filter: blur(18px);
    }

    .shadow.one {
      width: 320px;
      height: 72px;
      right: 122px;
      bottom: 106px;
    }

    .shadow.two {
      width: 260px;
      height: 64px;
      left: 442px;
      bottom: 88px;
    }

    .copy {
      position: absolute;
      left: 116px;
      top: 418px;
      width: 380px;
      color: rgba(45, 58, 51, .88);
      text-shadow: 0 2px 8px rgba(255,255,255,.26);
    }

    .eyebrow {
      display: inline-block;
      margin-bottom: 14px;
      padding: 9px 14px;
      border-radius: 999px;
      background: rgba(255,255,255,.52);
      font-family: "Helvetica Neue", Arial, sans-serif;
      font-size: 15px;
      letter-spacing: .12em;
      text-transform: uppercase;
      color: rgba(74, 93, 84, .92);
      backdrop-filter: blur(8px);
    }

    h1 {
      margin: 0;
      font-size: 47px;
      line-height: 1.08;
      font-weight: 600;
      max-width: 360px;
    }

    p {
      margin: 14px 0 0;
      font-size: 22px;
      line-height: 1.35;
      color: rgba(60, 74, 68, .75);
      max-width: 350px;
    }
  </style>
</head>
<body>
  <div class="scene">
    <div class="wall"></div>
    <div class="window"></div>
    <div class="frame"></div>
    <div class="plant">
      <div class="leaf l1"></div>
      <div class="leaf l2"></div>
      <div class="leaf l3"></div>
      <div class="leaf l4"></div>
      <div class="leaf l5"></div>
      <div class="pot"></div>
    </div>
    <div class="sofa"><div class="seat"></div></div>
    <div class="table">
      <div class="mug"></div>
      <div class="notebook"></div>
    </div>
    <div class="person">
      <div class="arm left"></div>
      <div class="arm right"></div>
      <div class="hair"></div>
      <div class="head"></div>
      <div class="body"></div>
      <div class="leg left"></div>
      <div class="leg right"></div>
    </div>
    <div class="shadow one"></div>
    <div class="shadow two"></div>
    <div class="floor"></div>
    <div class="copy">
      <div class="eyebrow">Installation en libéral</div>
      <h1>Trouver ses premiers patients</h1>
      <p>Une présence sobre, humaine et rassurante pour démarrer sereinement.</p>
    </div>
  </div>
  <div class="light"></div>
  <div class="bokeh"></div>
  <div class="grain"></div>
  <div class="vignette"></div>
</body>
</html>`;

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 2 });
  await page.setContent(html, { waitUntil: 'networkidle0' });
  const pngBuffer = await page.screenshot({ type: 'png' });
  const webpBuffer = await sharp(pngBuffer).webp({ quality: 90 }).toBuffer();
  await fs.writeFile(outputPath, webpBuffer);
  console.log(`Cover image created: ${outputPath}`);
} finally {
  await browser.close();
}
