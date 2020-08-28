var schedule = require('node-schedule');

/*
Cron-style Scheduling
*/

var s1 = schedule.scheduleJob('10 * * * * *', function () {
	console.log(new Date(), '10 * * * * *');
});

var s2 = schedule.scheduleJob('0 17 ? * 0,4-6', function () {
	console.log(new Date(), 'Today is recognized by Rebecca Black!');
});

var s3 = schedule.scheduleJob('20 * * * * *', function (fireDate) {
	console.log(new Date(), 'This job was supposed to run at ', fireDate);
});

/*
Date-based Scheduling
*/

var s4 = (function () {
	var date = new Date('05 Apr 2018 15:15:00');
	var j = schedule.scheduleJob(date, function () {
		console.log(new Date(), 'The world is going to end today.');
	});

	return j;
})();

var s5 = (function () {
	var date = new Date('05 Apr 2018 15:15:05');
	var x = 'Tada!';
	var j = schedule.scheduleJob(date, function (y) {
		console.log(new Date(), y);
	}.bind(null, x));
	x = 'Changing Data';

	return j;
})();

/*
Recurrence Rule Scheduling
*/

var s6 = (function () {
	var rule = new schedule.RecurrenceRule();
	rule.minute = 1;

	var j = schedule.scheduleJob(rule, function () {
		console.log(new Date(), 'Recurrence Rule Scheduling ', rule.minute, 'minute');
	});

	return j;
})();

var s7 = (function () {
	var rule = new schedule.RecurrenceRule();
	rule.dayOfWeek = [0, new schedule.Range(4, 6)];
	rule.hour = 17;
	rule.minute = 0;

	var j = schedule.scheduleJob(rule, function () {
		console.log(new Date(), 'RecurrenceRule every Thursday, Friday, Saturday, and Sunday at 5pm');
	});
})();

/*
Object Literal Syntax
*/

var s8 = schedule.scheduleJob({ hour: 14, minute: 30, dayOfWeek: 0 }, function () {
	console.log(new Date(), 'Object Literal Syntax');
});

/*
Set StartTime and EndTime
*/

var s9 = (function () {
	let startTime = new Date(Date.now() + 5000);
	let endTime = new Date(startTime.getTime() + 5000);
	var j = schedule.scheduleJob({ start: startTime, end: endTime, rule: '*/1 * * * * *' }, function () {
		console.log(new Date(), 'Set StartTime and EndTime');
	});
	return j;
})();

/*
Handle Jobs and Job Invocations
*/

s9.cancel();

/*
job.cancelNext(reshedule)
This method invalidates the next planned invocation or the job. When you set the parameter reschedule to true then the Job is newly scheduled afterwards.

job.reschedule(spec)
This method cancels all pending invocation and registers the Job completely new again using the given specification. Return true/false on success/failure.

job.nextInvocation()
This method returns a Date object for the planned next Invocation for this Job. If no invocation is planned the method returns null.
*/