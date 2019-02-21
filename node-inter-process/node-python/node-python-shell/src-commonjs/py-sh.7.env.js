const { PythonShell } = require('python-shell');

console.log(process.env.NODE_ENV);

const node_env = process.env.NODE_ENV || 'development';

let pyshell = new PythonShell('../test/python/echo_env.py', {
  args: [node_env]
});

pyshell.on('message', function(message) {
  // received a message sent from the Python script (a simple "print" statement)
  console.log(message);
});

// end the input stream and allow the process to exit
pyshell.end(function(err, code, signal) {
  if (err) throw err;
  console.log('The exit code was: ' + code);
  console.log('The exit signal was: ' + signal);
});
