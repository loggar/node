var connection = require('mysql').createConnection({
	port: 84943, // WRONG PORT
});

connection.connect(function (err) {
	console.log(err.code); // 'ECONNREFUSED'
	console.log(err.fatal); // true
});

connection.query('SELECT 1', function (error, results, fields) {
	console.log(error.code); // 'ECONNREFUSED'
	console.log(error.fatal); // true
});


/*
Normal errors however are only delegated to the callback they belong to. So in the example below, only the first callback receives an error, the second query works as expected:
*/

connection.query('USE name_of_db_that_does_not_exist', function (error, results, fields) {
	console.log(error.code); // 'ER_BAD_DB_ERROR'
});

connection.query('SELECT 1', function (error, results, fields) {
	console.log(error); // null
	console.log(results.length); // 1
});


/*
Last but not least: If a fatal errors occurs and there are no pending callbacks, or a normal error occurs which has no callback belonging to it, the error is emitted as an 'error' event on the connection object. This is demonstrated in the example below:
*/

connection.on('error', function (err) {
	console.log(err.code); // 'ER_BAD_DB_ERROR'
});

connection.query('USE name_of_db_that_does_not_exist');


