var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'admin',
	database: 'elearning'
});

var userId = 'some user provided value';
var sql1 = 'SELECT * FROM users WHERE id = ' + connection.escape(userId);
connection.query(sql1, function (error, results, fields) {
	if (error) throw error;
	// ...
});

connection.query('SELECT * FROM users WHERE id = ?', [userId], function (error, results, fields) {
	if (error) throw error;
	// ...
});

connection.query('UPDATE users SET foo = ?, bar = ?, baz = ? WHERE id = ?', ['a', 'b', 'c', userId], function (error, results, fields) {
	if (error) throw error;
	// ...
});

var post = { id: 1, title: 'Hello MySQL' };
var query2 = connection.query('INSERT INTO posts SET ?', post, function (error, results, fields) {
	if (error) throw error;
	// Neat!
});
console.log(query2.sql); // INSERT INTO posts SET `id` = 1, `title` = 'Hello MySQL'


var CURRENT_TIMESTAMP_1 = { toSqlString: function () { return 'CURRENT_TIMESTAMP()'; } };
var sql3 = mysql.format('UPDATE posts SET modified = ? WHERE id = ?', [CURRENT_TIMESTAMP_1, 42]);
console.log(sql3); // UPDATE posts SET modified = CURRENT_TIMESTAMP() WHERE id = 42


var query4 = "SELECT * FROM posts WHERE title=" + mysql.escape("Hello MySQL");
console.log(query4); // SELECT * FROM posts WHERE title='Hello MySQL'