const http2 = require('http2');
const server = http2.createServer();
server.on('stream', (stream, requestHeaders) => {
	stream.respond({ ':status': 200, 'content-type': 'text/plain' });
	stream.write('hello ');
	stream.end('world');
});
server.listen(8000);

// Because the HTTP/2 support is still experimental, in order to run this server, the Node.js instance must be started using the --expose-http2 command line argument:

// $ node --expose-http2 h2server.js