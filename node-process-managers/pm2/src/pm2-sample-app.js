var env_mode = process.env.NODE_ENV || 'development';
var schedule = require('node-schedule');

console.log('Start Application : %s in %s environment', __filename, env_mode);
var s1 = schedule.scheduleJob('10 * * * * *', function () {
	console.log('%s %s', new Date(), '10 * * * * *');
});