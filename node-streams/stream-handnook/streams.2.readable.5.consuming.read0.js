// This is because there is extra data left in internal buffers and we need to give node a "kick" to tell it
// that we are interested in more data past the 3 bytes that we have already. A simple ".read(0)" will do this:

process.stdin.on('readable', function () {
	var buf = process.stdin.read(3);
	console.dir(buf);
	if (buf) console.dir(buf.toString());
	process.stdin.read(0);
});

/*
λ node streams.2.readable.5.consuming.read0.js < ../../../docs/sample-res/words.txt
Buffer [Uint8Array] [ 50, 13, 10 ]
Buffer [Uint8Array] [ 49, 48, 56 ]
*/