const http2 = require('spdy')
const logger = require('morgan')
const express = require('express')
const app = express()
const fs = require('fs')

app.use(logger('dev'))

app.get('/', function (req, res) {
	res.send(`hello, http2!
go to /pushy`)
})

app.get('/pushy', (req, res) => {
	var stream = res.push('/main.js', {
		status: 200, // optional
		method: 'GET', // optional
		request: {
			accept: '*/*'
		},
		response: {
			'content-type': 'application/javascript'
		}
	})
	stream.on('error', function () {
	})
	stream.end('console.log("hello from push stream!");')
	res.end('<script src="/main.js"></script>')
})

var options = {
	key: fs.readFileSync('./ssl/server.key'),
	cert: fs.readFileSync('./ssl/server.crt')
}

http2
	.createServer(options, app)
	.listen(8080, () => {
		console.log(`Server is listening on https://localhost:8080.
You can open the URL in the browser.`)
	})