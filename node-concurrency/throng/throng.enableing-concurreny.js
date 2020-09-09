const os = require("os");
const cpuCount = os.cpus().length || 1;
const throng = require("throng");

var WORKERS = process.env.WEB_CONCURRENCY || cpuCount;

throng(
  {
    workers: WORKERS,
    lifetime: Infinity,
  },
  start
);
