var boot = require('../app').boot,
	shutdown = require('../app').shutdown,
	port = require('../app').port,
	superagent = require('superagent'),
	expect = require('expect.js');

describe('server', function () {
	before(function () {
		boot();
	});
	describe('homepage', function () {
		it('should respond to GET', function (done) {
			superagent
				.get('http://localhost:' + port + '/')
				.end(function (err, res) {
					expect(res.status).to.equal(200);
					expect(res.text).to.contain("OK");
					done();
				})
		})
	});
	after(function () {
		shutdown();
	});
});