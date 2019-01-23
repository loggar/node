var dnode = require('dnode');
var net = require('net');

var d = dnode();
d.on('remote', function (remote) {
	remote.transform('beep', function (cb) {
		cb(10, function (s) {
			console.log('beep:10 => ' + s);
			d.end();
		});
	});
});

var c = net.connect(5004);
c.pipe(d).pipe(c);

/*
$ streams.6.rpc.3.dnode.server.js
$ streams.6.rpc.4.dnode.client.js
beep:10 => BOOOOOOOOOOP
*/