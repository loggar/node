const { Worker, isMainThread, workerData } = require("worker_threads");

console.log("worker data", workerData.foo);
