var fs = require('fs');
var path = require('path');
var readableStream = fs.createReadStream(path.join(__dirname, 'files/data.txt'));

var data = '';
var chunk;

readableStream.on('readable', function () {
	while ((chunk = readableStream.read()) != null) {
		data += chunk;
	}
});

readableStream.on('end', function () {
	console.log(data)
});
