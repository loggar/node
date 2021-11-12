const http = require("http");
const fs = require("fs");
// Server configuration
const hostname = "127.0.0.1";
const port = 3000;
// Render page
fs.readFile("./index.html", function(err, html) {
  if (err) {
    throw err;
  }
  const server = http
    .createServer(function(request, response) {
      response.writeHeader(200, { "Content-Type": "text/html" });
      response.write(html);
      response.end();
    })
    .listen(port, hostname, () => {
      console.log(`Server running at http://${hostname}:${port}/`);
    });
});
