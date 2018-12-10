// You can tell .read(n) to return n bytes of data. Reading a number of bytes is merely advisory and does not work ofr object streams,
// but all of the core streams support it.

process.stdin.on('readable', function () {
	var buf = process.stdin.read(3);
	console.dir(buf);
	// if(buf) console.dir(buf.toString());
});

/*
λ node streams.2.readable.4.consuming.readn.js < ../../../docs/sample-res/words.txt
Buffer [Uint8Array] [ 50, 13, 10 ]
Buffer [Uint8Array] [ 49, 48, 56 ]
*/