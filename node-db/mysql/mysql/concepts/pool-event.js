var mysql = require('mysql');
var pool = mysql.createPool({
	connectionLimit: 10,
	host: 'localhost',
	user: 'root',
	password: 'admin',
	database: 'elearning'
});

pool.on('acquire', function (connection) {
	console.log('Connection %d acquired', connection.threadId);
});

pool.on('connection', function (connection) {
	connection.query('SET SESSION auto_increment_increment=1')
});

pool.on('enqueue', function () {
	console.log('Waiting for available connection slot');
});

pool.on('release', function (connection) {
	console.log('Connection %d released', connection.threadId);
});
