var http = require('http');
var fs = require('fs');
var port1 = 23001;
var port2 = 23002;

var server = http.createServer(function (req, res) {
	var stream = fs.createReadStream(__dirname + '/data.txt');
	stream.pipe(res);
});
server.listen(port1);

// compression
var oppressor = require('oppressor');

var server2 = http.createServer(function (req, res) {
	var stream = fs.createReadStream(__dirname + '/data.txt');
	stream.pipe(oppressor(req)).pipe(res);
});
server2.listen(port2);
