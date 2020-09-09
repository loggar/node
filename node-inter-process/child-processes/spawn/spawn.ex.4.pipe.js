// We can also pipe the standard input/output of multiple processes on each other, just like we can do with Linux commands. For example, we can pipe the stdout of the find command to the stdin of the wc command to count all the files in the current directory:

const spawn = require('child_process').spawn;

const find = spawn('find', ['.', '-type', 'f']);
const wc = spawn('wc', ['-l']);

find.stdout.pipe(wc.stdin);

wc.stdout.on('data', (data) => {
	console.log(`Number of files ${data}`);
});

// I added the -l argument to the wc command to make it count only the lines. When executed, the code above will output a count of all files in all directories under the current one.
