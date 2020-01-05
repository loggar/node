var cluster = require("cluster");
var numCPUs = require("os").cpus().length;
if (cluster.isMaster) {
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else if (cluster.isWorker) {
  // your server code
}

// Cluster Demo
/*
Run code/cluster.js with node ($ node cluster.js).
Install loadtest with npm: $ npm install -g loadtest
Run load testing with: $ loadtest http://localhost:3000 -t 20 —c 10
*/
