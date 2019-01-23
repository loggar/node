# Debugging Node.js with Google Chrome

Debugging tools provide you with a few important functionalities that console.log isn’t able to provide. In particular they let you pause the execution of your application at specific points in the code, and inspect and modify the values of the variables while the program is still running.

## Setting up Chrome for Node.js debugging

```
λ node --inspect app-hello.js
Debugger listening on ws://127.0.0.1:9229/d48031df-706e-4748-9ebb-d5f83511fbaa
For help see https://nodejs.org/en/docs/inspector
App listening on *:3000
```

Next, open `about:inspect` or `chrome://inspect/#devices` in Google Chrome Browser, and `Open dedicated DevTools for Node`

At this point, you will have access to all the features you may be already familiar with: breakpoints, source map for transpiled code, heap snapshot inspection, allocation profiling, JavaScript values hot-swapping, etc.

You can insert breakpoints to stop the execution of your program, inspect and “hot-swapping” the values of the variables.

Another awesome thing in using Chrome as a debugging tool is that you can debug both your front-end and back-end JavaScript code with the same interface.
