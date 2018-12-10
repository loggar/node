// The _read function will als get a provisional 'size' parameter as its first argument that specifies how manu bytes the consumer wants to read,
// but your readable stream can ignore the 'size' if it wants.

// To show that our _read function is only being called when the consumer requests, we can modify our readable stream code slightly to add a delay:

var Readable = require('stream').Readable;

var rs = Readable();
var c = 97 - 1;

rs._read = function () {
	if (c >= 'z'.charCodeAt(0)) return rs.push(null);

	setTimeout(function () {
		rs.push(String.fromCharCode(++c));
	}, 100);
};

rs.pipe(process.stdout);

process.on('exit', function () {
	console.error('\n_read() called ' + (c - 97) + ' times');
});

process.stdout.on('error', process.exit);

// Running this program we can see that _read() is only called 5 times when we olny request 5 bytes of output:

/*
λ node streams.2.readable.2.create.js | head -c5
abcde
_read() called 5 times
*/

// The setTimeout delay is necessary because the operating system requires some time to send us the relevant signals to close the pipe.

// The process.stdout.on('error', fn) handler is also necessary because the operating system will send a SIGPIPE to our process when head is no longer interested in our program's output,
// which gets emitted as an EPIPE error on process.stdout

// These extra complications are necessary when interfacing with the external operating system pipies but are automatic when we interface directly when node streams the whole time.

// If you want to create a readable stream that pushes arbitary values instead of strings and buffers, make sure to create your readable stream with
// Readable({ objectMode: true })



