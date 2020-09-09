if (cluster.isMaster) {
	const worker = cluster.fork();
	worker.send('hi there');

} else if (cluster.isWorker) {
	process.on('message', (msg) => {
		process.send(msg);
	});
}