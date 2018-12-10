const Nightmare = require('nightmare');

const nightmare = Nightmare();

nightmare.goto('https://github.com/loggar')
	.evaluate(() => {
		return document.title;
	})
	.end()
	.then((title) => {
		console.log(title);
	})
