// Streams are divided into four categories: Writable, Readable, Duplex, and Transform.
// Readable streams read data from a file or source and pass it to the main application. A buffer then stores the data in case there is a delay passing the data to the application.
// When Writable streams, the functionality is opposite. The data is read from the application to the file. There is also a buffer if the data transfer slows, and it then stores it there.
// Duplex streams, on the other hand, are a mixture of both the readable and writable streams where both streams are independent of each other.
// Transform streams are also like Duplex, but both the readable and writable streams are connected.
// The connection enables the application to write data to the application, but there the data must be manipulated before passing to the readable stream.

const { PassThrough } = require("stream");
const { createReadStream, createWriteStream } = require("fs");
const readStream = createReadStream("./README.md");
const writeStream = createWriteStream("./copy.txt");

const tunnel = new PassThrough();

tunnel.on("data", (chunk) => {
  console.log("bytes:", chunk); // bytes: <Buffer 23 20 4a 61 76 61 53 63 72 69 70 74 20 41 6c 67 6f 72 69 74 68 6d 73 20 61 6e 64 20 44 61 74 61 20 53 74 72 75 63 74 75 72 65 73 0a 0a 54 68 69 73 20 ... 1767 more bytes>
});

readStream.pipe(tunnel).pipe(writeStream);
