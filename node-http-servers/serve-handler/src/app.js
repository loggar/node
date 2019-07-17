const handler = require("./serve-handler")
const http = require('http');

const port = process.env.PORT || 28101;

const server = http.createServer((request, response) => {
	return handler(request, response, {
		public: "/public"
	});
})

server.listen(port, () => {
	var h = server.address().address;
	var p = server.address().port;
	console.log('server listeninig at http://%s:%s', h, p);
});
