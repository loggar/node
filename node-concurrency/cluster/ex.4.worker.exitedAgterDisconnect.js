const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
	console.log(`Master ${process.pid} is running`);

	// Fork workers.
	for (let i = 0; i < numCPUs; i++) {
		let worker = cluster.fork();
	}

	cluster.on('exit', (worker, code, signal) => {
		if (worker.exitedAfterDisconnect === true) {
			console.log('Oh, it was just voluntary – no need to worry');
		}

		// kill worker
		worker.kill();
	});
} else {
	http.createServer((req, res) => {
		res.writeHead(200);
		res.end('hello world\n');
	}).listen(8000);
	console.log(`Worker ${process.pid} started`);
}

/*
Set by calling .kill() or .disconnect(). Until then, it is undefined.

The boolean worker.exitedAfterDisconnect allows distinguishing between voluntary and accidental exit, the master may choose not to respawn a worker based on this value.
*/
