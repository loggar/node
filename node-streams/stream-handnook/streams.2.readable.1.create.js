// Readable streams produce data that can be fed into a writable, transform, or duplex stream by calling '.pipe()':
// readableStream.pipe(writeable);
// readableStream.pipe(transform);
// readableStream.pipe(duplex);


// Custom Readable Stream

var Readable = require('stream').Readable;

var rs = new Readable;
rs.push('a ');
rs.push('b\n');
rs.push(null);  // this tells the consumer that rs is done outputting data.

rs.pipe(process.stdout);

// Note here that we pushed content to the readable stream rs before piping to process.stdout, but the complete message was still written.
// This is because when you '.push()' to a readable stream, the chunks you push are buffered until a consumer is ready to read them.

// However, it would be even better in many circumstances if we could avoid buffering data altogether are only generate the data when the consumer asks for it.
// We can push chunks on-demand by defining a '._read' function:

var rstream = Readable();
var c = 97;

rstream._read = function () {
	rstream.push(String.fromCharCode(c++));
	if (c > 'z'.charCodeAt(0)) rstream.push(null);
}

rstream.pipe(process.stdout);

// Here we push the letters a to z, inclusive; but only when the consumer is ready to read them.
