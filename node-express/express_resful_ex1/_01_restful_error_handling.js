'use strict';

var express = require('express'),
	http = require('http'),
	logger = require('bunyan-request-logger'),
	errorHandler = require('express-error-handler'),
	app = express(),
	log = logger(),
	server,
	port = 3000;

app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(log.requestLogger());

// Respond to get requests on /albums
app.get('/albums', function (req, res) {
	res.send({
		chmzq50np0002gfixtr1qp64o: {
			"id": "chmzq50np0002gfixtr1qp64o",
			"name": "Settle",
			"artist": "Disclosure",
			"artistId": "chmzq4l480001gfixe8a3nzhm",
			"coverImage": "/covers/medium/zrms5gxr.jpg",
			"year": "2013",
			"genres": [
				"electronic", "house", "garage", "UK garage",
				"future garage"
			]
		}
	});
});

// Deliver 405 errors if the request method isn't
// defined.
app.all('/albums', errorHandler.httpError(405));


// Deliver 404 errors for any unhandled routes.
// Express has a 404 handler built-in, but it
// won't deliver errors consistent with your API.
app.all('*', errorHandler.httpError(404));

// Log errors.
app.use(log.errorLogger());

// Create the server
server = http.createServer(app);

// Handle errors. Remember to pass the server
// object into the error handler, so it can be
// shut down gracefully in the event of an
// unhandled error.
app.use(errorHandler({
	server: server
}));

server.listen(port, function () {
	console.log('Listening on port ' + port);
});