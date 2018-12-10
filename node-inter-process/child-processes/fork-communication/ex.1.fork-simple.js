const fork = require('child_process').fork;
const program = path.resolve('other.js');
const child = fork(program);

/*
By default the child console/output will be inherited from the parent.
Which means you will see all the output in the terminal from both the parent and child processes.
*/