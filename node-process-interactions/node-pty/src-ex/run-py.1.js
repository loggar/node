const path = require('path');
const spawn = require('node-pty').spawn;

var pyProcess = spawn('python.exe', ['simple-out.py']);

pyProcess.on('data', data => {
  console.log(data);
});

pyProcess.on('exit', exitCode => {
  console.log('Exiting with code ' + exitCode);
});

/*
Strictly speaking, these aren't color escapes, but they are ANSI escapes:

0K ==> erase rest of line
?25l ==> hide cursor
?25h ==> show cursor

On Windows, node-pty uses winpty, which has a flag WINPTY_FLAG_PLAIN_OUTPUT that suppresses ANSI escapes. winpty ordinarily generates ANSI escapes even for programs that only write unescaped text.
*/
