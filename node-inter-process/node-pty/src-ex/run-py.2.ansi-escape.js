const path = require('path');
const spawn = require('node-pty').spawn;
const stripAnsi = require('strip-ansi');

var pyProcess = spawn('python.exe', ['simple-out.py']);

pyProcess.on('data', data => {
  console.log(stripAnsi(data));
});

pyProcess.on('exit', exitCode => {
  console.log('Exiting with code ' + exitCode);
});
