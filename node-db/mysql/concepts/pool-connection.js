var mysql = require('mysql');
var pool = mysql.createPool({
	connectionLimit: 10,
	host: 'localhost',
	user: 'root',
	password: 'admin',
	database: 'elearning'
});

pool.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
	if (error) throw error;
	console.log('The solution is: ', results[0].solution);
});

/*
Connections can be pooled to ease sharing a single connection, or managing multiple connections.
*/

pool.getConnection(function (err, connection) {
	// connected! (unless `err` is set)
});

/*
When you are done with a connection, just call connection.release() and the connection will return to the pool, ready to be used again by someone else.
*/
pool.getConnection(function (err, connection) {
	// Use the connection
	connection.query('SELECT something FROM sometable', function (error, results, fields) {
		// And done with the connection.
		connection.release();

		// Handle error after the release.
		if (error) throw error;

		// Don't use the connection here, it has been returned to the pool.
	});
});