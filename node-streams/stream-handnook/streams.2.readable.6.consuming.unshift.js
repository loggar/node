// You can also use '.unshift()' to put back data so that the same read logic will fire when '.read()' gives you more data than you wanted.

var offset = 0;

process.stdin.on('readable', function () {
	var buf = process.stdin.read();
	if (!buf) return;
	for (; offset < buf.length; offset++) {
		if (buf[offset] === 0x0a) {
			console.dir(buf.slice(0, offset).toString());
			buf = buf.slice(offset + 1);
			offset = 0;
			process.stdin.unshift(buf);
			return;
		}
	}
	process.stdin.unshift(buf);
});

/*
λ tail -n +50000 ../../../docs/sample-res/words.txt | head -n10 | node streams.2.readable.6.consuming.unshift.js
'bravos\r'
'bravura\r'
'bravuraish\r'
'bravuras\r'
'bravure\r'
'braw\r'
'brawer\r'
'brawest\r'
'brawl\r'
'brawled\r'
tail: error writing 'standard output'
*/

// There are modules on npm such as 'split' that you should use instead of rolling your own line-parsing logic.
