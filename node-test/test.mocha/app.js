var http = require('http');
var express = require('express');

var app = express();
app.set('port', 3000);
app.get('/', function (req, res) {
	res.sendStatus(200);
});

var server = http.createServer(app);
var boot = function () {
	server.listen(app.get('port'), function () {
		console.info('Express server listening on port ' + app.get('port'));
	});
}

var shutdown = function () {
	server.close();
}

if (require.main === module) {
	boot();
}
else {
	console.info('Running app as a module')
	exports.boot = boot;
	exports.shutdown = shutdown;
	exports.port = app.get('port');
}