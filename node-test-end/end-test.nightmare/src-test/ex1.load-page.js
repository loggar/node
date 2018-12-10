const Nightmare = require('nightmare')

describe('Public Pages', function () {
	this.timeout('30s')

	let nightmare = null
	beforeEach(() => {
		nightmare = new Nightmare()
	})

	describe('/ (Home Page)', () => {
		it('should load without error', done => {
			// your actual testing urls will likely be `http://localhost:port/path`
			nightmare.goto('https://gethoodie.com')
				.end()
				.then(function (result) { done() })
				.catch(done)
		})
	})

	describe('/auth (Login Page)', () => {
		it('should load without error', done => {
			nightmare.goto('https://gethoodie.com/auth')
				.end()
				.then(result => { done() })
				.catch(done)
		})
	})
})
