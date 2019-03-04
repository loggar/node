// receive a message in text mode
let shell = new PythonShell('script.py', { mode: 'text ' });
shell.on('stderr', function(stderr) {
  // handle stderr (a line of text from stderr)
});
