var path = require('path');
const fs = require('fs');
const csv = require('csv-streamify');

let csv_file_1 = path.resolve(path.resolve(path.dirname(__filename), '../csv'), './UsersImportSimpleSample.csv');

const parser = csv({ objectMode: true }, function (err, result) {
	if (err) throw err
	// our csv has been parsed succesfully 
	result.forEach(function (line) { console.log(line) })
})

// now pipe some data into it 
fs.createReadStream(csv_file_1).pipe(parser)