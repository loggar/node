const spawn = require('child_process').spawn;
// const { spawn } = require('child_process');

const child = spawn('pwd');

child.on('exit', function (code, signal) {
	console.log('child process exited with ' +
		`code ${code} and signal ${signal}`);
});

child.on('error', function (err) {
	throw err;
});

child.stdout.on('data', (data) => {
	console.log(`child stdout:\n${data}`);
});

child.stderr.on('data', (data) => {
	console.error(`child stderr:\n${data}`);
});
