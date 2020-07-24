app.get('/stream', function (req, res) {
	var stream = fs.createReadStream(largeImagePath)
	stream.pipe(res)
})