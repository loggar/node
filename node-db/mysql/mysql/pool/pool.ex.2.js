var mysql = require('mysql')
var util = require('util')

var pool = mysql.createPool({
	connectionLimit: 10,
	host: 'localhost',
	user: 'root',
	password: 'admin',
	database: 'elearning'
})

pool.getConnection((err, connection) => {
	if (err) {
		if (err.code === 'PROTOCOL_CONNECTION_LOST') {
			console.error('Database connection was closed.')
		}
		if (err.code === 'ER_CON_COUNT_ERROR') {
			console.error('Database has too many connections.')
		}
		if (err.code === 'ECONNREFUSED') {
			console.error('Database connection was refused.')
		}
	}
	if (connection) connection.release()
	return
})

pool.query = util.promisify(pool.query)

/*
connections are automatically released after a query. In fact, pool.query() is a shortcut for pool.getConnection() + connection.query() + connection.release() .
*/

module.exports = pool



	; (async function () {
		var result;

		try {
			result = await pool.query('SELECT * FROM addresses')

			pool.end(function (err) {
				if (err) {
					return console.log(err.message);
				}
			});
		} catch (err) {
			throw new Error(err)
		}

		if (result && result.length) {
			console.log('result.length: %d', result.length)
		} else {
			console.log('no result')
		}
	})();
