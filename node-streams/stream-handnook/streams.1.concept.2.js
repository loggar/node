// .pipe() is just a function that takes a readable source stream 'src' and hooks the output to a destination writable stream 'dst:'

var fs = require('fs');
var stream = require('stream');

var src = fs.createReadStream(__dirname + '/data.txt');
var dst = new stream.Writable();
dst._write = function (chunk, encoding, done) {
	console.log(chunk.toString());
	done();
};

src.pipe(dst);

// .pipe(dst) returns dst
// so that you can chain multiple .pipe() calls together

a.pipe(b).pipe(c).pipe(d);

// which is the same as:

a.pipe(b);
b.pipe(c);
c.pipe(d);

// This is very much like what you might do on the command-line to pipe programs together:
// a | b | c | d
