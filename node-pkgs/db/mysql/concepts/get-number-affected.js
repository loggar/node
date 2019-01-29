var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'admin',
	database: 'elearning'
});

connection.query('DELETE FROM posts WHERE title = "wrong"', function (error, results, fields) {
	if (error) throw error;
	console.log('deleted ' + results.affectedRows + ' rows');
});

connection.query('UPDATE posts SET ...', function (error, results, fields) {
	if (error) throw error;
	console.log('changed ' + results.changedRows + ' rows');
})