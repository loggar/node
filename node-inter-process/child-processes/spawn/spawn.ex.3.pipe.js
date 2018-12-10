const spawn = require('child_process').spawn;

const child = spawn('wc');

process.stdin.pipe(child.stdin)

child.stdout.on('data', (data) => {
	console.log(`child stdout:\n${data}`);
});

/*
$ node spawn.ex.3.pipe.js
hello. // <- input this.
child stdout:
check it.
*/