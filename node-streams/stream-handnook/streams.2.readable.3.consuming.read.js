// Most of the time it is much easier to just pipe a readable stream into another kind of stream or a stream created with a module like 'through' or 'concat-stream',
// but occasionally it might be useful to consume a readable stream directly.

process.stdin.on('readable', function() {
	var buf = process.stdin.read();
	console.dir(buf);
	// if(buf) console.dir(buf.toString());
});

/*
λ echo 'abcdefghijklmnopqrstuvwxyz1234567890' | node streams.2.readable.3.consuming.read.js
Buffer [Uint8Array] [
  97,
  98,
  99,
  100,
  101,
  102,
  103,
  104,
  105,
  106,
  107,
  108,
  109,
  110,
  111,
  112,
  113,
  114,
  115,
  116,
  117,
  118,
  119,
  120,
  121,
  122,
  49,
  50,
  51,
  52,
  53,
  54,
  55,
  56,
  57,
  48,
  13,
  10 ]
null
*/