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

var isWin = /^win/.test(process.platform);
if (!isWin) {
	kill(child.pid, null, function () {
		console.log('%d killed', child.pid);
	});
} else {
	var cp = require('child_process');
	cp.exec('taskkill /PID ' + child.pid + ' /T /F', function (error, stdout, stderr) {
		console.log('stdout: ' + stdout);
		console.log('stderr: ' + stderr);
		if (error !== null) {
			console.log('exec error: ' + error);
		}
	});
	// The /T (terminates all the sub processes) and /F (forcefully terminating) arguments are also critical and without them we can't achieve the desired results.
}
