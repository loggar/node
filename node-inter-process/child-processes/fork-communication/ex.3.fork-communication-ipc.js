// To communicate with the child process we need to enable ipc — inter process communication. To do this we need to add list of input/output options.

// https://nodejs.org/api/child_process.html#child_process_options_stdio

const fork = require('child_process').fork;

const program = path.resolve('program.js');
const parameters = [];
const options = {
	stdio: ['pipe', 'pipe', 'pipe', 'ipc']
};

const child = fork(program, parameters, options);
