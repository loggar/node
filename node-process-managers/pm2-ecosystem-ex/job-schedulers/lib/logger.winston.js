/**
 * js logger with winston
 * @author Charly Lee
 * @description format style
 * @version 0.1.1
 */
var winston = require('winston');
require('winston-daily-rotate-file');
var dateFormat = require('dateformat');
var path = require('path');

/**
 * 
 * @param {*} process_nm 
 * @param {*} log_level 
 * @param {*} file_mode 0:Console, 1:DailyRotateFile, 2.File
 * @param {*} file_path 
 */
var loggar_winston = function (process_nm, log_level, file_mode, file_path) {
	if (!process_nm) process_nm = 'unknown';
	else process_nm = path.basename(process_nm, '.js');
	log_level = log_level || 'debug'
	file_path = file_path || './_log/tmp';
	file_mode = file_mode || 0;

	var timestamp = function () {
		return dateFormat(new Date(), 'yyyy-mm-dd HH:MM:ss');
	};

	var formatter = function (options) {
		return timestamp() + ' [' + options.level.toUpperCase()[0] + '] [' + process_nm + '] ' + (options.message ? options.message : '') + (options.meta && Object.keys(options.meta).length ? JSON.stringify(options.meta) : '');
	}

	var transportConsole = new (winston.transports.Console)({
		level: log_level, /* { error: 0, warn: 1, info: 2, verbose: 3, debug: 4, silly: 5 } */
		json: false, /* true : will log out multi-line JSON objects */
		stringify: false,
		timestamp: timestamp,
		formatter: formatter
	});

	var transportFile = new winston.transports.File({
		filename: file_path,
		level: log_level,
		json: false,
		stringify: false,
		timestamp: timestamp,
		formatter: formatter
	});

	var transportDailyRotateFile = new (winston.transports.DailyRotateFile)({
		filename: file_path,
		datePattern: '.yyyy-MM-dd',
		prepend: false,
		level: log_level,
		json: false,
		stringify: false,
		timestamp: timestamp,
		formatter: formatter
	});

	var transports = null;
	if (file_mode === 1) {
		transports = [transportDailyRotateFile];
	} else if (file_mode === 2) {
		transports = [transportFile];
	} else {
		transports = [transportConsole];
	}

	return new (winston.Logger)({ transports: transports });
}

module.exports = {
	init: function (env_mode, filename, log_file) {
		if (env_mode !== 'production') {
			return loggar_winston(filename || 'Process Name', 'debug', 0);
		} else {
			return loggar_winston(filename || 'Process Name', 'info', 1, log_file)
		}
	}
}
