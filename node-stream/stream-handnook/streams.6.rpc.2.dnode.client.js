// then you can hack up a simple client that calls the server's .transform() function:

var dnode = require('dnode');
var net = require('net');

var d = dnode();
d.on('remote', function (remote) {
    remote.transform('beep', function (s) {
        console.log('beep => ' + s);
        d.end();
    });
});

var c = net.connect(5004);
c.pipe(d).pipe(c);

/*
$ streams.6.rpc.1.dnode.server.js
$ node streams.6.rpc.2.dnode.client.js
beep => BOOP
*/