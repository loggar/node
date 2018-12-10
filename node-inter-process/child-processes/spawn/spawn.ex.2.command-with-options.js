const spawn = require('child_process').spawn;

const child = spawn('find', ['.', '-type', 'f']);

child.stdin.on('data', (data) => {
	console.log(`child stdin:\n${data}`);
});

child.stdout.on('data', (data) => {
	console.log(`child stdout:\n${data}`);
});

child.stderr.on('data', (data) => {
	console.error(`child stderr:\n${data}`);
});
