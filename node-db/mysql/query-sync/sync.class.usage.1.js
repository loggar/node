var DataBase = require('./connection.mysql.sync.class');
var config = require('./mysql.datasources')

var database = new DataBase(config);

database.query('SELECT * FROM some_table')
	.then(rows => database.query('SELECT * FROM other_table'))
	.then(rows => database.close());