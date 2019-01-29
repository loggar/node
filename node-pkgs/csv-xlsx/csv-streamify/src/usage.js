var path = require('path');
const fs = require('fs');
const csv = require('csv-streamify');

var csv_dir = path.resolve(path.dirname(__filename), './csv');
console.log(csv_dir);

const parser = csv();
 
// emits each line as a buffer or as a string representing an array of fields 
parser.on('data', function (line) {
  console.log(line);
})

var csv_file_1 = path.resolve(csv_dir, './UsersImportSimpleSample.csv');
console.log(csv_file_1);

// now pipe some data into it 
fs.createReadStream(csv_file_1).pipe(parser);