var fs = require('fs');
var path = require('path');
var Mysqldump = require('./mysqldump-stream');

var mysqldump = new Mysqldump('elearning', {
	gzip: true, // default: false
	host: 'localhost', // default: localhost
	port: 3306, // default: 3306
	user: 'root', // default: 'root'
	password: 'admin', //default: false
	mysqlBinDir: 'C:/_dev/mysql/mysql-5.7.11-winx64/bin/', // end with '/'
	configPath: path.resolve(__dirname, './config.cnf')
});

try {
	mysqldump.on('end', () => {
		console.log('end of stream.');
	});
	mysqldump.start();
	mysqldump.pipe(fs.createWriteStream(path.resolve(__dirname, './_tmp/mydatabase.sql.gz')));

} catch (err) {
	console.log(err);
}
