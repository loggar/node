var connect = require('connect');
var http = require('http');
var app = connect();

var portNumber = 13030;

// logging middleware
app.use(function(req, res, next){
	console.log(req.url + " " + req.method);
	next();
});

app.use(function(req, res){
	res.writeHead(200, {'Content-Type' : 'text/plain'});
	res.end('Hello World\n');
});

http.createServer(app).listen(portNumber, 'localhost', function() {
	console.log('Server running at port ' + portNumber);
});