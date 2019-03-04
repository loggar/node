// receive a message in text mode
let shell = new PythonShell('script.py', { mode: 'text ' });
shell.on('message', function(message) {
  // handle message (a line of text from stdout)
});

// receive a message in JSON mode
let shell = new PythonShell('script.py', { mode: 'json ' });
shell.on('message', function(message) {
  // handle message (a line of text from stdout, parsed as JSON)
});
