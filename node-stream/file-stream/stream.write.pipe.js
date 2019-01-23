var fs = require("fs");

var readStream = fs.createReadStream(__dirname + "/files/data.txt");
var writeStream = fs.createWriteStream(__dirname + "/files/out.txt");

readStream.pipe(writeStream);
