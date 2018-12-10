/*
The streaming interface that dnode provides here is a duplex stream since both the client and server are piped to each other (c.pipe(d).pipe(c)) with requests and responses coming from both sides.

The craziness of dnode begins when you start to pass function arguments to stubbed callbacks.
Here's an updated version of the previous server with a multi-stage callback passing dance:
*/

var dnode = require('dnode');
var net = require('net');

var server = net.createServer(function (c) {
	var d = dnode({
		transform: function (s, cb) {
			cb(function (n, fn) {
				var oo = Array(n + 1).join('o');
				fn(s.replace(/[aeiou]{2,}/, oo).toUpperCase());
			});
		}
	});
	c.pipe(d).pipe(c);
});

server.listen(5004);
