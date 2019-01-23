var fs = require("fs");
var stream;
stream = fs.createWriteStream(__dirname + "/files/data.txt");

stream.write("Tutorial on Node.js")
stream.write("Introduction")
stream.write("Events")
stream.write("Generators")
stream.write("Data Connectivity")
stream.write("Using Jasmine")

console.log(stream)
