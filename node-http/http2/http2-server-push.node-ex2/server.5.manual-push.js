for (const asset of ['/static/awesome.css', '/static/unicorn.png']) {
	// stream is a ServerHttp2Stream.
	stream.pushStream({ ':path': asset }, (err, pushStream) => {
		if (err) throw err;
		pushStream.respondWithFile(asset);
	});
}
