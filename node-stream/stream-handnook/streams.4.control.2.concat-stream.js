// Here's an example usage of concat-stream that will parse incoming url-encoded form data and reply with a stringified JSON version of the form parameters:

var http = require('http');
var qs = require('querystring');
var concat = require('concat-stream');

var server = http.createServer(function (req, res) {
	req.pipe(concat(function (body) {
		var params = qs.parse(body.toString());
		res.end(JSON.stringify(params) + '\n');
	}));
});
server.listen(5005);

/*
curl \
	--request GET \
	--url http://localhost:5005
	-d 'beep=boop&dinosaur=trex'

HTTP/1.1 200 OK
Date: Thu, 29 Nov 2018 04:16:24 GMT
Connection: keep-alive
Content-Length: 34

{"beep":"boop","dinosaur":"trex"}
*/
