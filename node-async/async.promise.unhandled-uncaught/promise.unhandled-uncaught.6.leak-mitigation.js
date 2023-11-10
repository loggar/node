const http = require("http");
const server = http.createServer(handle);

server.listen(3000);

process.on("unhandledRejection", (err) => {
  throw err;
});

function handle(req, res) {
  doStuff().then((body) => {
    res.end(body);
  });
}

function doStuff() {
  if (Math.random() < 0.5) {
    return Promise.reject(new Error("kaboom"));
  }

  return Promise.resolve("hello world");
}

// The process will crash, but that might be preferrable to leaking resources in this case. In other cases, the listener might attempt to gracefully recover or to gracefully shut down by first responding to any requests still in progress, and only crash if it can’t respond to pending requests.
