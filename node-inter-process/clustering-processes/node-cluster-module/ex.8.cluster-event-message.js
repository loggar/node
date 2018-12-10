cluster.on('message', (worker, message, handle) => {
	if (arguments.length === 2) {
		handle = message;
		message = worker;
		worker = undefined;
	}
	// ...
});