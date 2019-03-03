var Mysqldump = require('mysqldump-stream');
var mysqldump = new Mysqldump('elearning', {
	gzip: true, //default: false
	host: 'localhost', //default
	port: 3306, //default
	user: 'root', //default: process.env.USER || 'root'
	password: 'admin' //default: false
});

var fs = require('fs');

try {
	mysqldump.start();
	mysqldump.pipe(fs.createWriteStream('./_tmp/mydatabase.sql.gz'));
} catch (err) {
	console.log(err);
}
