const Nightmare = require('nightmare')

describe('Login Page', function () {
	this.timeout('30s')

	let nightmare = null
	beforeEach(() => {
		// show true lets you see wth is actually happening :)
		nightmare = new Nightmare({ show: true })
	})

	describe('given bad data', () => {
		it('should fail', done => {
			nightmare
				.goto('https://gethoodie.com/auth')
				.on('page', (type, message) => {
					if (type == 'alert') done()
				})
				.type('.login-email-input', 'notgonnawork')
				.type('.login-password-input', 'invalid password')
				.click('.login-submit')
				.wait(2000)
				.end()
				.then()
				.catch(done)
		})
	})
})
