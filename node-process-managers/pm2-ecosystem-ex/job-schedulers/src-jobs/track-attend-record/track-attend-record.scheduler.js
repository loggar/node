var env_mode = process.env.NODE_ENV || 'development';
var path = require("path");
var log_file = require('../lib-resources/dirs').resolveLog(env_mode, path.basename(__filename));
var logger = require('../lib/logger.winston').init(env_mode, __filename, log_file);

var schedule = require('node-schedule');
var run = require('./track-attend-record');

logger.info('Start Application : %s in %s environment', __filename, env_mode);
var schedule_track_attend_record = schedule.scheduleJob('0 10 8 * * *', function () {
	logger.debug('Run scheduleJob %s %s', new Date(), __filename);
	run();
});