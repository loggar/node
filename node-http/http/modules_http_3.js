var http = require('http');

http.createServer(function(req, res){
	var url_01 = "/";
	var url_02 = "/about";
	
	if(req.url === url_01) {
		res.writeHead(200, {'Content-Type' : 'text/html'});
		res.end("res.end" + " " + url_01);
	}
	
	else if(req.url === url_02) {
		res.writeHead(200, {'Content-Type' : 'text/html'});
		res.end("res.end" + " " + url_02);
	}
	
	else {
		res.writeHead(200, {'Content-Type' : 'text/plain'});
		res.end("res.end" + " " + "404 error!!");
	}
}).listen(13030, 'localhost', function() {
	console.log('Server running at port 13030');
});
