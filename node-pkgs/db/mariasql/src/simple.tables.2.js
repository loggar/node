// Get column metadata:

var Client = require('mariasql');

var c = new Client({
	host: '127.0.0.1',
	user: 'root',
	password: 'admin'
});

c.query('SHOW DATABASES', null, { metadata: true }, function (err, rows) {
	if (err)
		throw err;
	// `rows.info.metadata` contains the metadata
	console.dir(rows);
});

c.end();