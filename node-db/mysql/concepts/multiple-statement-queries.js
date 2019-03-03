var connection = mysql.createConnection({ multipleStatements: true });

connection.query('SELECT 1; SELECT 2', function (error, results, fields) {
	if (error) throw error;
	// `results` is an array with one element for every statement in the query:
	console.log(results[0]); // [{1: 1}]
	console.log(results[1]); // [{2: 2}]
});


var query = connection.query('SELECT 1; SELECT 2');

query
	.on('fields', function (fields, index) {
		// the fields for the result rows that follow
	})
	.on('result', function (row, index) {
		// index refers to the statement this result belongs to (starts at 0)
	});