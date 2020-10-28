const { PythonShell } = require('python-shell');

let pyshell = new PythonShell('../test/python/echo_binary.py');

// sends a message to the Python script via stdin
pyshell.send('hello');

// this works well.
pyshell.stdout.on('data', function(data) {
  console.log(data);
});

// end the input stream and allow the process to exit
pyshell.end(function(err, code, signal) {
  if (err) throw err;
  console.log('The exit code was: ' + code);
  console.log('The exit signal was: ' + signal);
});
