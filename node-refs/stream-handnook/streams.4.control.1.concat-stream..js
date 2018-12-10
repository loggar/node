// concat-stream will buffer up stream contents into a single buffer.
// concat(cb) just takes a single callback cb(body) with the buffered body when the stream has finished.

// For example, in this program, the concat callback fires with the body string "beep boop." once cs.end() is called.
// The program takes the body and upper-case it.

var concatStream = require('concat-stream');

var ws = concatStream(function (body) {
	console.log(body.toUpperCase());
});

ws.write('beep ');
ws.write('boop.');
ws.end();

/*
λ node streams.4.control.1.concat-stream..js
BEEP BOOP.
*/
