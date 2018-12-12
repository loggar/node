fastify.get('/fastify', async (request, reply) => {
	request.raw.stream.pushStream({
		':path': '/a/resource'
	}, function (err, stream) {
		if (err) {
			request.log.warn(err);
			return
		}
		stream.respond({ ':status': 200 });
		stream.end('content');
	});

	return 'Hello World!';
});
