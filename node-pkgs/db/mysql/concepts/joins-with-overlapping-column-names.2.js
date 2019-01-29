var options = { sql: '...', nestTables: '_' };
connection.query(options, function (error, results, fields) {
	if (error) throw error;
	/* results will be an array like this now:
	[{
	  table1_fieldA: '...',
	  table1_fieldB: '...',
	  table2_fieldA: '...',
	  table2_fieldB: '...',
	}, ...]
	*/
});