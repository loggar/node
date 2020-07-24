var fs = require('fs');
var path = require('path');
var readableStream = fs.createReadStream(path.join(__dirname, 'files/data.txt'));

var data = '';

readableStream.setEncoding('utf8');

readableStream.on('data', function (chunk) {
	data += chunk;
});

readableStream.on('end', function () {
	console.log(data);
});