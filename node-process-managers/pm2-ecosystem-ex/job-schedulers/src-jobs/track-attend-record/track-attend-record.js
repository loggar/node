var env_mode = process.env.NODE_ENV || 'development';
var path = require("path");
var log_file = require('../lib-resources/dirs').resolveLog(env_mode, path.basename(__filename));
var logger = require('../lib/logger.winston').init(env_mode, __filename, log_file);

var nl = require('../../lib/os.simple').nl;
var getConnection = require('../../lib/connection.mysql.simple');
var mailSender = require('../../lib/mail.smtp.gmail');
var mailAddr = require('../../lib-resources/mail-address');

var query_str_list = require('./track-attend-record.sql.list');

var run = function () {
	var connection = getConnection();
	connection.query(query_str_list, function (error, results, fields) {
		if (error) {
			logger.error('%j', error);
			return false;
		}
		if (typeof (results[0]) !== 'undefined' && (results[0]).length > 0) {
			var result_formatt_str = nl + JSON.stringify(results[0], null, '\t');
			logger.info('%s', result_formatt_str);
			mailSender.send({
				from: mailAddr.job_scheduler,
				to: env_mode !== 'production' ? mailAddr.testers : mailAddr.receivers,
				subject: '[DB-' + env_mode + '] Remained Attend Record Detected.',
				text: result_formatt_str
			});
		} else {
			logger.debug('%s', "no result.");
		}
	});
	connection.end();
}

module.exports = run;