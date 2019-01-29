async function routes(fastify, options) {
	fastify.get('/a/', async (request, reply) => {
		return { a: 'a' }
	})
}

module.exports = routes