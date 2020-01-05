const computecluster = require('compute-cluster');

// allocate a compute cluster
var cc = new computecluster({
	module: './ex.1.worker.js'
});

cc.on('error', function (e) { console.log('OMG!', e); });

var toRun = 10

// then you can perform work in parallel
for (var i = 0; i < toRun; i++) {
	cc.enqueue({ input: "foo" + i }, function (err, r) {
		if (err) console.log("an error occured:", err);
		else console.log("it's nice:", r);
		if (--toRun === 0) cc.exit();
	});
};

// Kill all child processes, invoking callback (with err param) when complete.
cc.exit(function (err) {
	if (err) {
		console.log(err);
	}
});