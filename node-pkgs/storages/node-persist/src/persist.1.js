var logger = require('../../winston/logger.winston')(__filename);
var storage = require('node-persist');
var path = require('path');

logger.debug(path);
var dir = path.dirname(__filename);
logger.debug(dir);
var targetDir = path.resolve(dir, "../storage/.node-persist");
logger.debug(targetDir);

storage.init({
	dir: targetDir,
	stringify: JSON.stringify,
	parse: JSON.parse,
	encoding: 'utf8',
	logging: false,  // can also be custom logging function 
	continuous: true, // continously persist to disk 
	interval: false, // milliseconds, persist to disk on an interval 
	ttl: false, // ttl* [NEW], can be true for 24h default or a number in MILLISECONDS 
	expiredInterval: 2 * 60 * 1000, // [NEW] every 2 minutes the process will clean-up the expired cache 
	// in some cases, you (or some other service) might add non-valid storage files to your 
	// storage dir, i.e. Google Drive, make this true if you'd like to ignore these files and not throw an error 
	forgiveParseErrors: false // [NEW] 
} /* and optional callback */).then(function onSuccess() {
	console.log("success");

	// callback 
	storage.getItem('name', function (err, value) {
		if (err) console.err(err);
		console.log(value);
	});

	// promise 
	storage.getItem('obj').then(function (value) {
		console.log(value);
	});

	storage.setItem('fibonacci', [0, 1, 1, 2, 3, 5, 8]);
	storage.setItem(42, 'the answer to life, the universe, and everything.', function (err) {
		// done 
	});
	storage.setItem(42, 'the answer to life, the universe, and everything.', { ttl: 1000 * 60 /* 1 min */ }, function (err) {
		// done 
	});

	var batman = storage.getItem('batman');
	batman.sidekick = 'Robin';

	// using the promise 
	storage.setItem('batman', batman).then(
		function () {
			// success 
		},
		function () {
			// error 
		})
}, function onError(err) {
	console.err(err);
}); // or use the promise
