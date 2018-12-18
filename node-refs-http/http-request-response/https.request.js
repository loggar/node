const https = require('https');

const options = {
	hostname: 'encrypted.google.com',
	port: 443,
	path: '/',
	method: 'GET'
};

const req = https.request(options, (res) => {
	console.log('statusCode:', res.statusCode);
	console.log('headers:', res.headers);

	let data = '';

	res.on('data', (d) => {
		data += d;
	});

	resp.on('end', () => {
		console.log(JSON.parse(data));
	});
}).on("error", (err) => {
	console.log("Error: " + err.message);
});

req.end();