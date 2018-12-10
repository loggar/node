const timeouts = [];
function errorMsg() {
	console.error('Something must be wrong with the connection ...');
}

cluster.on('fork', (worker) => {
	timeouts[worker.id] = setTimeout(errorMsg, 2000);
});

cluster.on('listening', (worker, address) => {
	clearTimeout(timeouts[worker.id]);
});

cluster.on('exit', (worker, code, signal) => {
	clearTimeout(timeouts[worker.id]);
	errorMsg();
});
