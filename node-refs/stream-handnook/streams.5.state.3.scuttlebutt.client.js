// Now we can make a client that connects to this server, updates the count on an interval, and prints all the updates it receives:

var Model = require('scuttlebutt/model');
var net = require('net');

var m = new Model;
var s = m.createStream();

s.pipe(net.connect(8888, 'localhost')).pipe(s);

m.on('update', function cb(key) {
	// wait until we've gotten at least one count value from the network
	if (key !== 'count') return;
	m.removeListener('update', cb);

	setInterval(function () {
		m.set('count', Number(m.get('count')) + 1);
	}, 100);
});

m.on('update', function (key, value) {
	console.log(key + ' = ' + value);
});

/*
The client is slightly trickier since it should wait until it has an update from somebody else to start updating the counter itself or else its counter would be zeroed.

Once we get the server and some clients running we should see a sequence like this:

count = 183
count = 184
count = 185
count = 186
count = 187
count = 188
count = 189

Occasionally on some of the nodes we might see a sequence with repeated values like:

count = 147
count = 148
count = 149
count = 149
count = 150
count = 151

These values are due to scuttlebutt's history-based conflict resolution algorithm which is hard at work ensuring that the state of the system across all nodes is eventually consistent.

Note that the server in this example is just another node with the same privledges as the clients connected to it.
The terms "client" and "server" here don't affect how the state synchronization proceeds, just who initiates the connection.
Protocols with this property are often called symmetric protocols. See dnode for another example of a symmetric protocol.
*/