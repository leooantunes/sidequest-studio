const { chromium } = require('playwright');
const FPS = 30, DUR = 34, TOTAL = FPS * DUR;
const [part, parts] = process.argv.slice(2).map(Number);
(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1920, height: 1080 } });
  await p.goto('file://' + __dirname + '/stage.html', { waitUntil: 'networkidle' });
  await p.evaluate(() => document.fonts.ready);
  for (let f = part; f < TOTAL; f += parts) {
    await p.evaluate(t => render(t), f / FPS);
    await p.screenshot({ path: `frames/${String(f).padStart(5, '0')}.jpg`, type: 'jpeg', quality: 93 });
  }
  await b.close();
})();
