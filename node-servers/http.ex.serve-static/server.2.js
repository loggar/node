var http = require("http");
var fs = require("fs");
var path = require("path");
var mime = require("mime-types");

var cache = {};
var servicePort = 3000;
var rootDir = "public";
var indexPage = "/index.html";

function send404(response) {
  response.writeHead(404, {
    "Content-Type": "text/plain"
  });
  response.write("Error 404: resource not found.");
  response.end();
}

function sendFile(response, filePath, fileContents) {
  response.writeHead(200, {
    "Content-Type": mime.lookup(path.basename(filePath))
  });
  response.end(fileContents);
}

function serveStatic(response, cache, absPath) {
  if (cache[absPath]) {
    sendFile(response, absPath, cache[absPath]);
  } else {
    fs.exists(absPath, function(exists) {
      if (exists) {
        fs.readFile(absPath, function(err, data) {
          if (err) {
            send404(response);
          } else {
            cache[absPath] = data;
            sendFile(response, absPath, data);
          }
        });
      } else {
        send404(response);
      }
    });
  }
}

var server = http.createServer(function(request, response) {
  var filePath = false;

  if (request.url === "/") {
    filePath = rootDir + indexPage;
  } else {
    filePath = rootDir + request.url;
  }

  var absPath = "./" + filePath;
  serveStatic(response, cache, absPath);
});

server.listen(servicePort, function() {
  console.log("Server listening on port " + servicePort);
});
