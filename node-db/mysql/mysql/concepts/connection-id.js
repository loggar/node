var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'admin',
	database: 'elearning'
});

connection.connect(function (err) {
	if (err) throw err;
	console.log('connected as id ' + connection.threadId);
});

connection.end();