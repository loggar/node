// https://github.com/request/request
// $ npm install request

const request = require('request');
request('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', { json: true }, (err, res, body) => {
	if (err) { return console.log(err); }
	console.log(body.url);
	console.log(body.explanation);
});

/*
Request is a simplified HTTP client comparable to Python’s requests library.
This library is much more user friendly than the default http module and has been considered a go-to for the community for several years.

Its a fantastic option if you just want an easy to use library that deals with HTTP requests in a sane way.
If you want to use Promises, you can check out the request-promise library.
*/