(function () {
	var childProcess = require("child_process");
	childProcess.spawn = require('cross-spawn');
	var spawn = childProcess.spawn;
})(); 
