var fs = require('fs');
var path = require('path');

var args = process.argv.splice(2);
var command = args.shift();
var taskDescription = args.join(' ');
var file = path.join(process.cwd(), '/_01_basic/files/tasks.txt');

console.log(args);
console.log(command);
console.log(file);

function loadOrInitializeTaskArray(file, callback) {
	fs.exists(file, function(exists) {
		var tasks = [];
		if(exists) {
			fs.readFile(file, 'utf8', function(err, data) {
				if(err) throw err;
				var data = data.toString();
				var tasks = JSON.parse(data || '[]');
				callback(tasks);
			});
		} else {
			callback([]);
		}
		
	});
}

function storeTasks(file, tasks) {
	fs.writeFile(file, JSON.stringify(tasks), 'utf8', function(err) {
		if(err) throw err;
		console.log('Saved.');
	});
}

switch (command) {
case 'list' :
	loadOrInitializeTaskArray(file, function(tasks) {
		for(var i in tasks) {
			console.log(tasks[i]);
		}
	});
	break;
case 'add' :
	loadOrInitializeTaskArray(file, function(tasks) {
		tasks.push(taskDescription);
		storeTasks(file, tasks);
	});
	break;
default :
	console.log('Usage:' + process.argv[0] + ' list|add [taskDescription]');
	
}