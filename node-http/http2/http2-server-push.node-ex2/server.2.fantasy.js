const Fastify = require('fastify');

// https is necessary otherwise browsers will not
// be able to connect
const fastify = Fastify({
	http2: true,
	https: {
		key: getKeySomehow(),
		cert: getCertSomehow()
	}
});

fastify.get('/fastify', async (request, reply) => {
	return 'Hello World!';
});

server.listen(3000);
