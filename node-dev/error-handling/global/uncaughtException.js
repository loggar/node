// Always listen to uncaughtException!

process.on('uncaughtException', function (err) {
	console.error('uncaughtException: ', err.message)
	console.error(err.stack)
	process.exit(1)
})

// or

process.addListener('uncaughtException', function (err) {
	console.error('uncaughtException: ', err.message)
	console.error(err.stack)
	process.exit(1)
})