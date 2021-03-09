var winston = require('winston');
var dateFormat = require('dateformat');
var path = require('path');

module.exports = function(filename) {
	if(!filename) filename = 'unknown';
	else filename = path.basename(filename, '.js');
	
	return new (winston.Logger) ({
		transports: [new (winston.transports.Console)({
			level: 'debug', /* { error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5 } */
			json: false, /* true : will log out multi-line JSON objects */
			stringify: false,
			timestamp : function() {
				return dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
			},
			formatter : function(options) {
				return options.timestamp() + ' [' + options.level.toUpperCase() + ']' + ' [' + filename + '] ' + (options.message ? options.message : '') + (options.meta && Object.keys(options.meta).length ? JSON.stringify(options.meta) : '');
			}
		})]
	});
}