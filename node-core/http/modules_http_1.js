var http = require('http');

http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type' : 'text/plain'});
	res.end('Hello World\n');
}).listen(13030, 'localhost', function() {
	console.log('Server running at port 13030');
});
