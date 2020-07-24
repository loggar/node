const fs = require('fs');

// Create a readable stream
let readableStream = fs.createReadStream('input.txt');

// Create a writable stream
let writeableStream = fs.createWriteStream('output.txt');

// Pipe the read and write operations
// read input.txt and write data to output.txt
readerStream.pipe(writerStream);

console.log('End of the Process');
