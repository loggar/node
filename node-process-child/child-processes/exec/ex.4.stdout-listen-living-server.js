var path = require('path');
var exec = require('child_process').exec;

var child = exec('node ' + path.resolve(__dirname, './ex.3.server.js'));
child.stdout.on('data', function (data) {
	console.log('stdout: ' + data);
});
child.stderr.on('data', function (data) {
	console.log('stdout: ' + data);
});
child.on('close', function (code) {
	console.log('closing code: ' + code);
});

/* // console
stdout: Server running at http://127.0.0.1:1337/
stdout: Visits: 1
stdout: Visits: 2
stdout: Visits: 3
stdout: Visits: 4
stdout: Visits: 5
closing code: 0
*/