// Kill query after 60s
connection.query({ sql: 'SELECT COUNT(*) AS count FROM big_table', timeout: 60000 }, function (error, results, fields) {
	if (error && error.code === 'PROTOCOL_SEQUENCE_TIMEOUT') {
		throw new Error('too long to count table rows!');
	}

	if (error) {
		throw error;
	}

	console.log(results[0].count + ' rows');
});