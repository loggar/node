var connect = require('connect');
var app = connect();

var portNumber = 13030;

app.use(function(req, res){
	res.writeHead(200, {'Content-Type' : 'text/plain'});
	res.end('Hello World\n');
}).listen(portNumber, 'localhost', function() {
	console.log('Server running at port ' + portNumber);
});
