const http = require("http");

const pid = process.pid;

http
  .createServer((req, res) => {
    for (let i = 1e7; i > 0; i--) {} // CPU Work
    console.log(`Handling request from process ${pid}`);
    req.setEncoding(`Hello from process ${pid}`);
  })
  .listen(31010, () => {
    console.log(`Started process ${pid}`);
  });
