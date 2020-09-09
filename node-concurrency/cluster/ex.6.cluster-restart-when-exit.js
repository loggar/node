cluster.on('exit', (worker, code, signal) => {
	console.log('worker %d died (%s). restarting...',
		worker.process.pid, signal || code);
	cluster.fork();
});