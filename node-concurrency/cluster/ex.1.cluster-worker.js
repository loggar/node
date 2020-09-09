const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
	console.log(`Master ${process.pid} is running`);

	// Fork workers.
	for (let i = 0; i < numCPUs; i++) {
		let worker = cluster.fork();

		worker.on('exit', (code, signal) => {
			if (signal) {
				console.log(`worker was killed by signal: ${signal}`);
			} else if (code !== 0) {
				console.log(`worker exited with error code: ${code}`);
			} else {
				console.log('worker success!');
			}
		});

		worker.on('online', () => {
			console.log(`Worker(pid: ${worker.process.pid}) is online`);
		});

		worker.on('listening', (address) => {
			console.log(`Worker(pid: ${worker.process.pid}) is listening at ${address.port}`);
		});
	}

	cluster.on('exit', (worker, code, signal) => {
		console.log(`worker ${worker.process.pid} died with ${signal || code}`);
	});

	cluster.on('disconnect', (worker) => {
		console.log(`The worker #${worker.id} has disconnected`);
	});

	cluster.on('online', (worker) => {
		console.log('Yay, the worker responded after it was forked');
	});

	cluster.on('listening', (worker, address) => {
		console.log(`A worker is now connected to ${address.address}:${address.port}`);
	});
} else {
	// Workers can share any TCP connection
	// In this case it is an HTTP server
	http.createServer((req, res) => {
		res.writeHead(200);
		res.end('hello world\n');
	}).listen(8000);

	console.log(`Worker ${process.pid} started`);
}

/*
Master 2316 is running
Worker(pid: 2380) is online
Worker(pid: 14600) is online
Worker(pid: 11944) is online
Worker 2380 started
Worker(pid: 2380) is listening at 8000
Worker(pid: 12036) is online
Worker 14600 started
Worker 11944 started
Worker(pid: 14600) is listening at 8000
Worker(pid: 11944) is listening at 8000
Worker 12036 started
Worker(pid: 12036) is listening at 8000
Worker(pid: 7632) is online
Worker(pid: 11568) is online
Worker 7632 started
Worker 11568 started
Worker(pid: 7632) is listening at 8000
Worker(pid: 11568) is listening at 8000
*/