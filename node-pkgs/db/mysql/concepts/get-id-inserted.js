var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'admin',
	database: 'elearning'
});

connection.query('INSERT INTO posts SET ?', { title: 'test' }, function (error, results, fields) {
	if (error) throw error;
	console.log(results.insertId);
});