var getConnection = require('./connection.mysql.simple');

class DataBaseMysql {
	constructor() {
		this.connection = getConnection();
	}
	query(sql, args) {
		return new Promise((resolve, reject) => {
			this.connection.query(sql, args, (err, result) => {
				if (err)
					return reject(err);
				resolve(result);
			});
		});
	}
	close() {
		return new Promise((resolve, reject) => {
			this.connection.end(err => {
				if (err)
					return reject(err);
				resolve();
			});
		});
	}
}

module.exports = DataBaseMysql;