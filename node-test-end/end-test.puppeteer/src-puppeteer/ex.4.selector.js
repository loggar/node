const puppeteer = require('puppeteer');

async function getData(url, selector) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  const data = await page.evaluate(selector => {
    return document.querySelector(selector).innerText;
  }, selector);
  await browser.close();
  return data;
}

const url = 'https://example.com';
const selector = '.example';
getData(url, selector).then(result => console.log(result));
