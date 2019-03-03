var path = require('path');
const fs = require('fs');
const csv = require('csv-streamify');

let csv_file_1 = path.resolve(path.resolve(path.dirname(__filename), '../csv'), './UsersImportSimpleSample.csv');

const options = {
	delimiter: ',', // comma, semicolon, whatever 
	newline: '\n', // newline character (use \r\n for CRLF files) 
	quote: '"', // what's considered a quote 
	empty: '', // empty fields are replaced by this, 

	// if true, emit arrays instead of stringified arrays or buffers 
	objectMode: false,

	// if set to true, uses first row as keys -> [ { column1: value1, column2: value2 }, ...] 
	columns: false
}

const parser = csv(options, function (err, result) {
	if (err) throw err
	// our csv has been parsed succesfully 
	result.forEach(function (line) { console.log(line) })
})

// now pipe some data into it 
fs.createReadStream(csv_file_1).pipe(parser)