// Note that the server above uses plain-text TCP connection so the server will not be accessible from Web Browsers, which require using TLS. We can, however, create a simple HTTP/2 client:

const http2 = require('http2');
const client = http2.connect('http://localhost:8000');
const req = client.request({ ':method': 'GET', ':path': '/' });
req.on('response', (responseHeaders) => {
	// do something with the headers
});
req.on('data', (chunk) => {
	// do something with the data
});
req.on('end', () => client.destroy());
