var path = require('path');

var fs = require("fs");
var XLSX = require('xlsx');

var run = function (workbook) {
	if (workbook.SheetNames.length !== 1 || !workbook.SheetNames[0]) {
		console.log('Invalid number of sheets');
		return false;
	}
	var worksheet = workbook.Sheets[workbook.SheetNames[0]];
	var sheet1 = XLSX.utils.sheet_to_json(worksheet, {
		raw: false,
		header: 1
	});

	var sheet2 = XLSX.utils.sheet_to_json(worksheet, {
		raw: false,
		header: 2
	});

	console.log(sheet1);
	console.log(sheet2);
}

function process_readStream(stream, cb) {
	var buffers = [];
	stream.on('data', function (data) {
		buffers.push(data);
	});
	stream.on('end', function () {
		var buffer = Buffer.concat(buffers);
		var workbook = XLSX.read(buffer, { type: "buffer" });
		cb(workbook);
	});
}

var read = function () {
	var filepath = path.join(__dirname, './sample-excel/sample.xlsx');
	var dataStream = fs.createReadStream(filepath);
	process_readStream(dataStream, run);
}

read();
