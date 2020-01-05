process.on('message', function (m) {
	setTimeout(function () {
		process.send(`complete ${m.input}`);
	}, 1000);
});