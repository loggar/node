const spawn = require('child_process').spawn;

/*
We can make the spawned child process inherit the standard IO objects of its parents if we want to, but also, more importantly, we can make the spawn function use the shell syntax as well. Here’s the same find | wc command implemented with the spawn function:
*/
const child = spawn('find . -type f | wc -l', {
	stdio: 'inherit',
	shell: true
});

// change the working directory of the script
const child_2 = spawn('find . -type f | wc -l', {
	stdio: 'inherit',
	shell: true,
	cwd: '/Users/samer/Downloads'
});

// set env
const child_3 = spawn('echo $ANSWER', {
	stdio: 'inherit',
	shell: true,
	env: { ANSWER: 42 },
});