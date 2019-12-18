var mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/test');

var Schema = mongoose.Schema;
var Tasks = new Schema({
	project: String,
	description: String
});

mongoose.model('Task', Tasks);

var Task = mongoose.model('Task');
var task = new Task();

task.project = 'project_1';
task.description = 'do_something_1';

task.save(function(err) {
	if(err) throw err;
	console.log('Task saved.');
});

Task.find({'project':'project_1'}, function(err, tasks) {
	for(var i in tasks) {
		console.log(tasks[i]);
	}
});

Task.update(
		{_id: '589945aa9f69901ca85f13d6'},
		{description: 'do_something_2'},
		{multi: false},
		function(err, rows_updated) {
			if(err) throw err;
			console.log(rows_updated + ' row updated.');
		}
);

Task.find({'project':'project_1'}, function(err, tasks) {
	for(var i in tasks) {
		console.log(tasks[i]);
	}
});

Task.findById('589946b91edf461f70557a88', function (err, task) {
	task.remove();
	
	mongoose.disconnect();
});
