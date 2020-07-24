/*
scuttlebutt can be used for peer-to-peer state synchronization with a mesh topology where nodes might only be connected through intermediaries and there is no node with an authoritative version of all the data.

The kind of distributed peer-to-peer network that scuttlebutt provides is especially useful when nodes on different sides of network barriers need to share and update the same state.
An example of this kind of network might be browser clients that send messages through an http server to each other and backend processes that the browsers can't directly connect to.
Another use-case might be systems that span internal networks since IPv4 addresses are scarce.

scuttlebutt uses a gossip protocol to pass messages between connected nodes so that state across all the nodes will eventually converge on the same value everywhere.

Using the scuttlebutt/model interface, we can create some nodes and pipe them to each other to create whichever sort of network we want:
*/

var Model = require('scuttlebutt/model');
var am = new Model;
var as = am.createStream();

var bm = new Model;
var bs = bm.createStream();

var cm = new Model;
var cs = cm.createStream();

var dm = new Model;
var ds = dm.createStream();

var em = new Model;
var es = em.createStream();

as.pipe(bs).pipe(as);
bs.pipe(cs).pipe(bs);
bs.pipe(ds).pipe(bs);
ds.pipe(es).pipe(ds);

em.on('update', function (key, value, source) {
	console.log(key + ' => ' + value + ' from ' + source);
});

am.set('x', 555);

/*
The network we've created is an undirected graph that looks like:

a <-> b <-> c
      ^
      |
      v
	  d <-> e

Note that nodes a and e aren't directly connected, but when we run this script:

$ node model.js
x => 555 from 1347857300518
*/

/*
the value that node a set finds its way to node e by way of nodes b and d.
Here all the nodes are in the same process but because scuttlebutt uses a simple streaming interface,
the nodes can be placed on any process or server and connected with any streaming transport that can handle string data.
*/
