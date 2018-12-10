var path = require('path');
var exec = require('child_process').exec;

exec('node ' + path.resolve(__dirname, './ex2.failing.js'), function (error, stdout, stderr) {
	console.log('stdout: ', stdout);
	console.log('stderr: ', stderr);
	if (error !== null) {
		console.log('exec error: ', error);
	}
});
