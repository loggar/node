var cp = require('child_process'),
	psTree = require('ps-tree');

var kill = function (pid, signal, callback) {
	signal = signal || 'SIGKILL';
	callback = callback || function () { };
	var killTree = true;
	if (killTree) {
		psTree(pid, function (err, children) {
			[pid].concat(
				children.map(function (p) {
					return p.PID;
				})
			).forEach(function (tpid) {
				try { process.kill(tpid, signal) }
				catch (ex) { }
			});
			callback();
		});
	} else {
		try { process.kill(pid, signal) }
		catch (ex) { }
		callback();
	}
};

var child = cp.exec("node -e 'while (true);'", function () { /*...*/ });
child.on('close', function (code, signal) {
	// If the process exited, code is the final exit code of the process, otherwise null.
	// If the process terminated due to receipt of a signal, signal is the string name of the signal, otherwise null.
	console.log('closing code: %s, signal: %s', code, signal);
});

kill(child.pid, null, function () {
	console.log('%d killed', child.pid);
});
