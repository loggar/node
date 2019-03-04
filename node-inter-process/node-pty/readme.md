# node-pty

This allows you to fork processes with pseudoterminal file descriptors. It returns a terminal object which allows reads and writes.

* Writing a terminal emulator (eg. via xterm.js).
* Getting certain programs to think you're a terminal, such as when you need a program to send you control sequences.

## Dependencies

### Windows

with `Administrator Mode`

```
npm install --global --production windows-build-tools
```

### Linux/Unix

```
sudo apt install -y make python build-essential
```

## install

```
npm install node-pty
```

## escape ansi from child's out

```
npm install strip-ansi
```

```js
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
```
