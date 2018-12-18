// Setting up a TLS-enabled HTTP/2 server requires just a few more additional steps:

const http2 = require('http2');
const options = {
	key: getKeySomehow(),
	cert: getCertSomehow()
};
const server = http2.createSecureServer(options);
server.on('stream', (stream, requestHeaders) => {
	stream.respond();
	stream.end('secured hello world!');
});
server.listen(43);
