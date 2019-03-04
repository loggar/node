import { PythonShell } from 'python-shell';
let pyshell = new PythonShell('my_script.py');

// sends a message to the Python script via stdin
pyshell.send('hello');

pyshell.on('message', function(message) {
  // received a message sent from the Python script (a simple "print" statement)
  console.log(message);
});

// end the input stream and allow the process to exit
pyshell.end(function(err, code, signal) {
  if (err) throw err;
  console.log('The exit code was: ' + code);
  console.log('The exit signal was: ' + signal);
  console.log('finished');
});

/*
Use .send(message) to send a message to the Python script. Attach the message event to listen to messages emitted from the Python script.

Use options.mode to quickly setup how data is sent and received between your Node and Python applications.

use text mode for exchanging lines of text
use json mode for exchanging JSON fragments
use binary mode for anything else (data is sent and received as-is)
*/

/*
// send a message in text mode
let shell = new PythonShell('script.py', { mode: 'text '});
shell.send('hello world!');

// send a message in JSON mode
let shell = new PythonShell('script.py', { mode: 'json '});
shell.send({ command: "do_stuff", args: [1, 2, 3] });
*/
