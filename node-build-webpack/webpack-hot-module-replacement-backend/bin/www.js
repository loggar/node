import http from 'http'
import app from '../src-server/app'

const server = http.createServer(app)
let current = app
server.listen(3000)
if (module.hot) {
	module.hot.accept(['../src-server/app'], () => {
		server.removeListener('request', current)
		server.on('request', app)
		current = app
	})
}