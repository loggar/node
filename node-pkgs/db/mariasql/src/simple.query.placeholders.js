var Client = require('mariasql');

var c = new Client({
	host: '127.0.0.1',
	user: 'root',
	password: 'admin',
	db: 'database_test_1'
});

c.query('SELECT * FROM member WHERE memberId = :memberId AND name = :name',
	{ memberId: 1337, name: 'Frylock' },
	function (err, rows) {
		if (err)
			throw err;
		console.dir(rows);
	});

c.query('SELECT * FROM member WHERE memberId = ? AND name = ?',
	[1337, 'Frylock'],
	function (err, rows) {
		if (err)
			throw err;
		console.dir(rows);
	});

c.end();