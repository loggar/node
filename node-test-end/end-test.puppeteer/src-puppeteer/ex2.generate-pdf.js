const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto('https://github.com/loggar', { waitUntil: 'networkidle2' });
	await page.pdf({
		path: path.join(__dirname, 'screenpdf', 'github_1.pdf'),
		format: 'A4'
	});
	browser.close();
})();
