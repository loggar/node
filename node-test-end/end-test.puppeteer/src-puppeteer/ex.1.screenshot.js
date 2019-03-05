const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto('https://github.com/loggar');
	await page.screenshot({
		path: path.join(__dirname, 'screenshot', 'github_1.png')
	});
	await page.screenshot({
		path: path.join(__dirname, 'screenshot', 'github_2.png'),
		fullPage: true
	});

	browser.close();
})();
