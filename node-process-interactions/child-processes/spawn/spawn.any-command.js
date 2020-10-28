// Spawn can be used to create a process from any command.

const spawn = require('child_process').spawn;

const command = 'node';
const parameters = [path.resolve('program.js')];

const child = spawn(command, parameters, {
	stdio: ['pipe', 'pipe', 'pipe', 'ipc']
});

// The command being executed here is node, but this can be any command for example a live transpiler like babel-node.
