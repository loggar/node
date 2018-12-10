module.exports = {
	setUp: function (callback) {
		this.mysql = require('mysql');
		this.connection = this.mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: 'admin',
			database: 'elearning'
		});
		this.connection.connect();
		callback();
	},
	tearDown: function (callback) {
		// clean up code here
		this.connection.end();
		callback();
	},

	testSqlWrite: function (test) {
		test.expect(1);
		this.connection.query('insert into tempData(tempDate, tempCelsius) values(?, ?)', [new Date(), 10],
			function (err, rows, cols) {
				if (err) {
					test.ok(false, err);
				} else {
					test.ok(true, rows);
				}
				test.done();
			});
	},

	testMysqlRead: function (test) {
		test.expect(1);
		this.connection.query('select * from tempData',
			function (err, rows, cols) {
				if (err) {
					test.ok(false, err);
				} else {
					test.ok(true, rows);
				}
				test.done();
			});
	}
};
