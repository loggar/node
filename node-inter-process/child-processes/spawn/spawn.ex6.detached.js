// important child process option to explain here is the detached option, which makes the child process run independently of its parent process.

// Assuming we have a file timer.js that keeps the event loop busy:
/*
// timer.js
setTimeout(() => {
	// keep the event loop busy
}, 20000);
*/

const spawn = require('child_process').spawn;

const child = spawn('node', ['timer.js'], {
	detached: true,
	stdio: 'ignore'
});

child.unref();

/*
The exact behavior of detached child processes depends on the OS. On Windows, the detached child process will have its own console window while on Linux the detached child process will be made the leader of a new process group and session.

If the unref function is called on the detached process, the parent process can exit independently of the child. This can be useful if the child is executing a long-running process, but to keep it running in the background the child’s stdio configurations also have to be independent of the parent.

The example above will run a node script (timer.js) in the background by detaching and also ignoring its parent stdio file descriptors so that the parent can terminate while the child keeps running in the background.
*/