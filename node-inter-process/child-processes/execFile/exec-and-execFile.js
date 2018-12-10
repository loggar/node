var child_process = require('child_process');

// exec: spawns a shell.
child_process.exec('ls -lah /tmp', function (error, stdout, stderr) {
	console.log(stdout);
});

// execFile: executes a file with the specified arguments
child_process.execFile('ls', ['-lah', '/tmp'], function (error, stdout, stderr) {
	console.log(stdout);
});

// other example: run python script
child_process.execFile('python', ['./myProgram.py'], (err, stdout, stderr) => {
	if (err) throw err;

	console.log(stdout, stderr);
});