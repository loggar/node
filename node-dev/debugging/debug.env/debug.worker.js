// Create multiple instances of debug
// In theory these would serve two different purposes
var debuggerA = require('debug')('worker:a'),
	debuggerB = require('debug')('worker:b');

// Sample usages of the debugger
function work() {
	debuggerA('doing lots of uninteresting work');
	setTimeout(work, Math.random() * 1000);
}

work();

function workb() {
	debuggerB('doing some work');
	setTimeout(workb, Math.random() * 2000);
}

workb();

/*
DEBUG=* node ./debug.worker.js

// Show all debugger messages prefixed "worker:_____"
DEBUG=worker:* node app.js

*/