// Run a child_process silently

const fork = require('child_process').fork;
const program = path.resolve('other.js');
const child = fork(program, [], {
	silent: true
});