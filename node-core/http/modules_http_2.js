var http = require('http');

http.createServer(function(req, res){
	var answer = "";
	
	answer += "Request URL: " + req.url + "\n";
	answer += "Request type: " + req.method + "\n";
	answer += "Request headers: " + JSON.stringify(req.headers) + "\n";
	
	res.writeHead(200, {'Content-Type' : 'text/plain'});
	res.end('Hello World\n\n' + answer);
}).listen(13030, 'localhost', function() {
	console.log('Server running at port 13030');
});
