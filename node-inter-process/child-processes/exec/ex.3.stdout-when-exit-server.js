var path = require('path');
var exec = require('child_process').exec;

exec('node ' + path.resolve(__dirname, './ex.3.server.js'), function (error, stdout, stderr) {
	console.log('stdout: ', stdout);
	console.log('stderr: ', stderr);
	if (error !== null) {
		console.log('exec error: ', error);
	}
});

/* // visit
$ curl http://127.0.0.1:1337/
Visits: 1

$ curl http://127.0.0.1:1337/
Visits: 2

$ curl http://127.0.0.1:1337/
Visits: 3

$ curl http://127.0.0.1:1337/
Visits: 4

$ curl http://127.0.0.1:1337/
Visits: 5

$ curl http://127.0.0.1:1337/
curl: (7) Failed to connect to 127.0.0.1 port 1337: Connection refused
*/

/* // console
stdout:  Server running at http://127.0.0.1:1337/
Visits: 1
Visits: 2
Visits: 3
Visits: 4
Visits: 5
stderr:  
*/