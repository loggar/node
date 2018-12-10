var cp = require('child_process'),
	psTree = require('ps-tree');

var child = cp.exec("node -e 'while (true);'", function () { /*...*/ });

/*
// This will not actually kill the child it will kill the `sh` process.
child.kill();

// it's because exec actually works like this:

function exec(cmd, cb) {
	spawn('sh', ['-c', cmd]);
	// ...
}
*/

/*
sh starts parses the command string and starts processes, and waits for them to terminate, but exec returns a process object with the pid of the sh process. However, since it is in wait mode killing it does not kill the children.

Use ps-tree like this:
*/

psTree(child.pid, function (err, children) {
	cp.spawn('kill', ['-9'].concat(children.map(function (p) { return p.PID })));
});
