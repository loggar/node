// import mysqldump from 'mysqldump'
const mysqldump = require('mysqldump')
const path = require('path')

const start = async function (a, b) {
	const result = await mysqldump({
		connection: {
			host: 'localhost',
			user: 'root',
			password: 'admin',
			database: 'elearning',
		},
		dumpToFile: path.resolve(__dirname, './_tmp/dump.sql')
	})

	console.log(result)
}

start()
