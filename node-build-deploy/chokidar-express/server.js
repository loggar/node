var express = require('express')
var app = express()
var chokidar = require('chokidar')
var port = process.env.PORT || 9000

var env_mode = process.env.NODE_ENV || 'development';
if (env_mode !== 'production') {
	var watcher = chokidar.watch('./app')
	watcher.on('ready', function () {
		watcher.on('all', function () {
			console.log("Clearing /dist/ module cache from server")
			Object.keys(require.cache).forEach(function (id) {
				if (/[\/\\]app[\/\\]/.test(id)) delete require.cache[id]
			})
		})
	})
} else {
	var watcher = chokidar.watch('./dist')
	watcher.on('ready', function () {
		watcher.on('all', function () {
			console.log("Clearing /dist/ module cache from server")
			Object.keys(require.cache).forEach(function (id) {
				if (/[\/\\]dist[\/\\]/.test(id)) delete require.cache[id]
			})
		})
	})
}

app.use(function (req, res, next) {
	require('./app/index')(req, res, next)
})
app.listen(port);
console.log('Server starts on port ' + port)