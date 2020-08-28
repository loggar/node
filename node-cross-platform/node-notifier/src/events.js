// Open a website!
notifier.on('click', (obj, options) => {
	const spawn = require('child_process').spawn;
	const cmd = spawn('open', ['https://github.com']);
});

notifier.on('close', (obj, options) => { });
