var buf = Buffer.alloc(26)
for (var i = 0; i < 26; i++) {
	buf[i] = i + 97 // 97 is ASCII a
}
console.log(buf) // <Buffer 61 62 63 64 65 66 67 68 69 6a 6b 6c 6d 6e 6f 70 71 72 73 74 75 76 77 78 79 7a>
console.log(buf.toString('utf8')) // abcdefghijklmnopqrstuvwxyz

console.log(buf.toString('ascii')) // outputs: abcdefghijklmnopqrstuvwxyz
console.log(buf.toString('ascii', 0, 5)) // outputs: abcde
console.log(buf.toString('utf8', 0, 5)) // outputs: abcde
console.log(buf.toString(undefined, 0, 5)) // encoding defaults to 'utf8', outputs abcde


// fs : data is buffer!
var fs = require('fs')
fs.readFile(`${__dirname}/buf.js`, function (err, data) {
	if (err) return console.error(err)
	console.log(data)
});
