var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'admin',
	database: 'elearning'
});


var sorter1 = 'date';
var sql1 = 'SELECT * FROM posts ORDER BY ' + connection.escapeId(sorter1);
connection.query(sql1, function (error, results, fields) {
	if (error) throw error;
	// ...
});


var sorter2 = 'date';
var sql2 = 'SELECT * FROM posts ORDER BY ' + connection.escapeId('posts.' + sorter2);
// -> SELECT * FROM posts ORDER BY `posts`.`date`


var sorter3 = 'date.2';
var sql3 = 'SELECT * FROM posts ORDER BY ' + connection.escapeId(sorter3, true);
// -> SELECT * FROM posts ORDER BY `date.2`


var userId = 1;
var columns = ['username', 'email'];
var query4 = connection.query('SELECT ?? FROM ?? WHERE id = ?', [columns, 'users', userId], function (error, results, fields) {
	if (error) throw error;
	// ...
});
console.log(query4.sql); // SELECT `username`, `email` FROM `users` WHERE id = 1


/*
Preparing Queries
*/

var sql5 = "SELECT * FROM ?? WHERE ?? = ?";
var inserts = ['users', 'id', userId];
sql5 = mysql.format(sql5, inserts);


/*
Custom format
*/

connection.config.queryFormat = function (query, values) {
	if (!values) return query;
	return query.replace(/\:(\w+)/g, function (txt, key) {
		if (values.hasOwnProperty(key)) {
			return this.escape(values[key]);
		}
		return txt;
	}.bind(this));
};

connection.query("UPDATE posts SET title = :title", { title: "Hello MySQL" });