import debug from "debug";
import http from "http";

const httpDebug = debug("http");

httpDebug("booting %o", name);

http
  .createServer((req, res) => {
    httpDebug(`${req.method} ${req.url}`);
    res.end("hello\n");
  })
  .listen(3000, () => {
    httpDebug("listening");
  });
