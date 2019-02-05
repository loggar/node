import http from 'http'
import app from '../src-server/app'
const server = http.createServer(app) // in other to applying hot-reloading, server and app should be defined separately.
let currentApp = app
server.listen(3000)
if (module.hot) {
	module.hot.accept(['../src-server/app'], () => {
		server.removeListener('request', currentApp)
		server.on('request', app)
		currentApp = app
	})
}