const { spawn } = require('child_process');

var pyProcess = spawn('python', ['simple-out.py']);

pyProcess.stdout.setEncoding('utf8');
pyProcess.stdout.on('data', data => {
  console.log(data);
});

pyProcess.stdout.on('end', data => {
  console.log(': closing connection.');
});
