// Explicitly generate a prepared query for later use

var Client = require('mariasql');

var c = new Client({
	host: '127.0.0.1',
	user: 'root',
	password: 'admin',
	db: 'database_test_1'
});

var prep = c.prepare('SELECT * FROM member WHERE id = :id AND name = :name');

c.query(prep({ id: 1337, name: 'Frylock' }), function (err, rows) {
	if (err)
		throw err;
	console.dir(rows);
});

c.end();