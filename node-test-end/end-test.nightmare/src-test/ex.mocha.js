const Nightmare = require('nightmare')

describe('Load a Page', function () {
	this.timeout('90s')

	let nightmare = null
	beforeEach(() => {
		nightmare = new Nightmare()
	})

	describe('/ (Home Page)', () => {
		it('should load without error', done => {
			nightmare.goto('https://github.com/loggar')
				.end()
				.then(function (result) {
					done()
				})
				.catch(done)
		})
	})
})
