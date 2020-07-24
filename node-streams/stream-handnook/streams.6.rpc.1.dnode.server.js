// dnode lets you call remote functions through any kind of stream.

// Here's a basic dnode server:

var dnode = require('dnode');
var net = require('net');

var server = net.createServer(function (c) {
	var d = dnode({
		transform: function (s, cb) {
			cb(s.replace(/[aeiou]{2,}/, 'oo').toUpperCase())
		}
	});
	c.pipe(d).pipe(c);
});

server.listen(5004);