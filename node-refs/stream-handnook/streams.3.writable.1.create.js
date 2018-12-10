// A writable stream is a stream you can .pipe() to but not from:

var Writable = require('stream').Writable;

var ws = Writable();
ws._write = function (chunk, enc, next) {
	console.dir(chunk);
	next();
};

process.stdin.pipe(ws);

// The first argument, chunk is the data that is written by the producer.

// The second argument enc is a string with the string encoding, but only when 'opts.decodeString' is 'false' and you have been written a string.

// The third argument, next(err) is the callback that tells the consumer that they can write more data.
// You can optionally pass an error object err, whick emits an 'error' event on the stream instance.

// If the readable stream you are piping from writes strings, they will be converted into 'Buffer's unless you create your writable stream with Writable({ decodeStrings: false });

/*
λ tail -n +50000 ../../../docs/sample-res/words.txt | head -n4 | node streams.3.writable.1.create.js
Buffer [Uint8Array] [
  98,
  114,
  97,
  118,
  111,
  115,
  13,
  10,
  98,
  114,
  97,
  118,
  117,
  114,
  97,
  13,
  10,
  98,
  114,
  97,
  118,
  117,
  114,
  97,
  105,
  115,
  104,
  13,
  10,
  98,
  114,
  97,
  118,
  117,
  114,
  97,
  115,
  13,
  10 ]
tail: error writing 'standard output'
*/