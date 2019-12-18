connection.ping(function (err) {
	if (err) throw err;
	console.log('Server responded to ping');
});