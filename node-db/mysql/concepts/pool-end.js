var mysql = require('mysql');
var pool = mysql.createPool({
	connectionLimit: 10,
	host: 'localhost',
	user: 'root',
	password: 'admin',
	database: 'elearning'
});

pool.end(function (err) {
	console.log('all connections in the pool have ended');
});