// To tell the destination writable stream that you are done writing, just call .end().
// You can also give .end(data) some data to write before ending.

var fs = require('fs');
var ws = fs.createWriteStream('data.txt');

ws.write('a ');

setTimeout(function () {
	ws.end('z');
}, 1000);

// If you care about high water marks and buffering, .write() returns false when there is more data than the opts.highWaterMark option passed to Writable() in the incoming buffer.
