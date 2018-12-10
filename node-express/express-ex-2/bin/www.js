//process.env.DEBUG = '*'; // debug module on

var path = require('path');
var app = require('../app');
var http = require('http');
var port = app.get('port');

http.createServer(app).listen(port)
.on('error', function onError(error) {
	if (error.syscall !== 'listen') {
		throw error;
	}
	var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
	switch (error.code) {
	case 'EACCES':
		console.error(bind + ' requires elevated privileges');
		process.exit(1);
		break;
	case 'EADDRINUSE':
		console.error(bind + ' is already in use');
		process.exit(1);
		break;
	default:
		throw error; 
	}
})
.on('listening', function onListening() {
	var addr = this.address();
	var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
	console.log(__filename + ' server listening: ' + bind);
});
