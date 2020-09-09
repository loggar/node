const fs = require("fs");

fs.writeFile("./file.txt", "Hello World!!", function () {
  console.log('Wrote "Hello World!!" into file.txt');
  fs.readFile("./file.txt", function (err, data) {
    if (err) {
      throw new Error(err);
    }
    console.log('Read "', data.toString(), '" from ./file.txt');
  });
});

console.log('Writing "Hello World!!" into file.txt');
