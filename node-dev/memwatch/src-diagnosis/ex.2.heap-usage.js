var memwatch = require('node-memwatch');

memwatch.on('stats', function (stats) {
	// do something with post-gc memory usage stats
	console.log(stats);
});
