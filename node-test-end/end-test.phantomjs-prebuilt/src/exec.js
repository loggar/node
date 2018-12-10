var phantomjs = require('phantomjs-prebuilt')
var program = phantomjs.exec('phantomjs-script.js', 'arg1', 'arg2')
program.stdout.pipe(process.stdout)
program.stderr.pipe(process.stderr)
program.on('exit', code => {
	// do something on end
})