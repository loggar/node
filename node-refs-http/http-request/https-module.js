//The following code will send a GET request to NASA’s API and print out the URL for the astronomy picture of the day as well as an explanation:
const https = require('https');
https.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', (resp) => {
	let data = '';
	// A chunk of data has been recieved.
	resp.on('data', (chunk) => {
		data += chunk;
	});
	// The whole response has been received. Print out the result.
	resp.on('end', () => {
		console.log(JSON.parse(data).explanation);
	});
}).on("error", (err) => {
	console.log("Error: " + err.message);
});

/*
Much of the HTTP, and the HTTPS, module’s functionality is fairly low-level. 
You’re required to receive response data in chunks rather than just providing a callback function to be executed as soon as all of the data is received.
You also need to parse the response data manually. This is fairly trivial if it is JSON formatted, but it is still an extra step.

One other problem is that this module does not support HTTPS by default, so we need to require the https module instead if the API we are using communicates over HTTPS.
It may take a bit more effort to get the data you want, but is a great utility if you don’t want to add too many dependencies to your codebase or want access to its low level functionality.
*/