const cluster = require('cluster');

if (cluster.isMaster) {
	const worker = cluster.fork();
	let timeout;

	worker.on('listening', (address) => {
		worker.send('shutdown');
		worker.disconnect();
		timeout = setTimeout(() => {
			worker.kill();
		}, 2000);
	});

	worker.on('disconnect', () => {
		clearTimeout(timeout);
	});

} else if (cluster.isWorker) {
	const net = require('net');
	const server = net.createServer((socket) => {
		// connections never end
	});

	server.listen(8000);

	process.on('message', (msg) => {
		if (msg === 'shutdown') {
			// initiate graceful close of any connections to server
		}
	});
}