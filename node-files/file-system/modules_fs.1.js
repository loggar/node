var os = require("os");
var fs = require("fs");
var url = require("url");
var util = require("util");
var net = require("net");

console.log("os", os);
console.log("fs", fs);
console.log("url", url);
console.log("util", util);
console.log("net", net);

console.log(os.platform());

// async file read
fs.readFile(__dirname + "/files/test.txt", "utf-8", function(err, data) {
	if(err) {throw err;}
	console.log(data);
});

//sync file read
var data = fs.readFileSync(__dirname + "/files/test.txt", "utf-8");
console.log(data);