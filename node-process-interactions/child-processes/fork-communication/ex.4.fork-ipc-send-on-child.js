// `ipc` will enable process.send() and process.on('message') in the child process. These can be used to communicate between the 2 processes.

if (process.send) {
	process.send("Hello");
}

process.on('message', message => {
	console.log('message from parent:', message);
});
