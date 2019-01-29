var DataBase = require('./connection.mysql.sync.class');
var config = require('./mysql.datasources')

/*
If you often use this pattern, it’s useful to wrap creating and closing the connection in a separate function like this:
*/

DataBase.execute = function (config, callback) {
	const database = new Database(config);
	return callback(database).then(
		result => database.close().then(() => result),
		err => database.close().then(() => { throw err; })
	);
};

let someRows, otherRows;
DataBase.execute(config,
	database => database.query('SELECT * FROM some_table')
		.then(rows => {
			someRows = rows;
			return database.query('SELECT * FROM other_table')
		})
		.then(rows => {
			otherRows = rows;
		})
).then(() => {
	console.log(someRows);
	console.log(otherRows);
}).catch(err => {
	console.log(err);
});
