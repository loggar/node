// import mysqldump from 'mysqldump'
const mysqldump = require('mysqldump')
const path = require('path')

// dump the result straight to a file

mysqldump({
	connection: {
		host: 'localhost',
		user: 'root',
		password: 'admin',
		database: 'elearning',
	},
	dumpToFile: path.resolve(__dirname, './_tmp/dump.sql')
})
