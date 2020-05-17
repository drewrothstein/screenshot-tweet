require('regenerator-runtime/runtime');
const puppeteer = require('puppeteer');

export default async function(tweetUrl, filePath) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({
    width: 720,
    height: 1024,
    deviceScaleFactor: 1,
    isMobile: true,
  });
  await page.goto(tweetUrl, { waitUntil: 'networkidle0', timeout: 10000 });
  await page.screenshot({path: filePath});
  await browser.close();
}
