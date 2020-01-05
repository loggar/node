var cc = new require('compute-cluster')({
	module: './foo.js',
	max_backlog: -1
});

cc.on('error', function (e) { console.log('OMG!', e); });

// Kill all child processes, invoking callback (with err param) when complete.
cc.exit(function (err) {
	if (err) {
		console.log(err);
	}
});