var env_mode = process.env.NODE_ENV || 'development';
var path = require("path");
var log_file = require('../lib-resources/dirs').resolveLog(env_mode, path.basename(__filename));
var logger = require('./logger.winston').init(env_mode, __filename, log_file);

var mysql = require('mysql');

var datasource = env_mode !== 'production' ?
	require('../lib-resources/mysql.datasources').dev :
	require('../lib-resources/mysql.datasources').production;

function initializeConnection(config) {
	function addDisconnectHandler(c) {
		c.on("error", function (error) {
			logger.error("%j", error);
			if (error instanceof Error) {
				logger.error(error.stack);
				if (error.code === "PROTOCOL_CONNECTION_LOST") {
					logger.info("Lost connection. Reconnecting...");
					initializeConnection(c.config);
				} else if (error.fatal) {
					throw error;
				}
			}
		});
	}

	var connection = mysql.createConnection(config);

	addDisconnectHandler(connection);

	connection.connect();
	return connection;
}

var getConnection = function () {
	return initializeConnection(datasource);
}

module.exports = getConnection;