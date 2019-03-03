var options = { sql: '...', nestTables: true };
connection.query(options, function (error, results, fields) {
	if (error) throw error;
	/* results will be an array like this now:
	[{
	  table1: {
		fieldA: '...',
		fieldB: '...',
	  },
	  table2: {
		fieldA: '...',
		fieldB: '...',
	  },
	}, ...]
	*/
});