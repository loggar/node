const Nightmare = require('nightmare')

describe('Using the App', function () {
	this.timeout('60s')

	let nightmare = null
	beforeEach(() => {
		// show true lets you see wth is actually happening :)
		nightmare = new Nightmare({ show: true })
	})

	describe('signing up and finishing setup', () => {
		it('should work without timing out', done => {
			nightmare
				.goto('https://gethoodie.com/auth')
				.type('.signup-email-input', 't' + Math.round(Math.random() * 100000) + '@test.com')
				.type('.signup-password-input', 'valid password')
				.type('.signup-password-confirm-input', 'valid password')
				.click('.signup-submit')
				.wait(2000)
				.select('.sizes-jeans-select', '30W x 30L')
				.select('.sizes-shoes-select', '9.5')
				.click('.sizes-submit')
				.wait('.shipit') // this selector only appears on the catalog page
				.end()
				.then(result => { done() })
				.catch(done)
		})
	})
})
