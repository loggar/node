var memwatch = require('node-memwatch');

memwatch.on('leak', function (info) {
	// look at info to find out about what might be leaking
	console.log(info);
});
