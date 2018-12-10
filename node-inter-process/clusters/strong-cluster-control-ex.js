// npm install --save strong-cluster-control

var cluster = require('cluster');
var control = require('strong-cluster-control');

// global setup here...

control.start({
	size: control.CPUS
}).on('error', function (er) {
	console.error(er);
});

if (cluster.isWorker) {
	// do work here...
}
