var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'admin',
	database: 'elearning'
});

connection.query('SELECT * FROM `books` WHERE `author` = "David"', function (error, results, fields) {
	// error will be an Error if one occurred during the query
	// results will contain the results of the query
	// fields will contain information about the returned results fields (if any)
});

connection.query('SELECT * FROM `books` WHERE `author` = ?', ['David'], function (error, results, fields) {
	// error will be an Error if one occurred during the query
	// results will contain the results of the query
	// fields will contain information about the returned results fields (if any)
});

connection.query({
	sql: 'SELECT * FROM `books` WHERE `author` = ?',
	timeout: 40000, // 40s
	values: ['David']
}, function (error, results, fields) {
	// error will be an Error if one occurred during the query
	// results will contain the results of the query
	// fields will contain information about the returned results fields (if any)
});

connection.query({
	sql: 'SELECT * FROM `books` WHERE `author` = ?',
	timeout: 40000, // 40s
},
	['David'],
	function (error, results, fields) {
		// error will be an Error if one occurred during the query
		// results will contain the results of the query
		// fields will contain information about the returned results fields (if any)
	}
);