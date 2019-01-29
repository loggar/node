const handler = require('serve-handler');

module.exports = async (request, response, options) => {
	await handler(request, response, options);
};