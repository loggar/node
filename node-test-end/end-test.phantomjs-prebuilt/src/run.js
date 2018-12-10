var phantomjs = require('phantomjs-prebuilt')
var webdriverio = require('webdriverio')
var wdOpts = { desiredCapabilities: { browserName: 'phantomjs' } }

phantomjs.run('--webdriver=4444').then(program => {
	webdriverio.remote(wdOpts).init()
		.url('https://developer.mozilla.org/en-US/')
		.getUrl().then(url => {
			console.log(url) // 'https://developer.mozilla.org/en-US/'
		})
		.getTitle().then(title => {
			console.log(title) // 'MDN Web Docs'
			program.kill() // quits PhantomJS
		})
})