const { Worker, isMainThread, parentPort } = require("worker_threads");

const doSomeHeavyComputing = function () {
  setTimeout(function () {
    console.log("time-elapsed");
  }, 3000);
};

if (isMainThread) {
  module.exports = async function timeConsumingOperationOnThreads(raw) {
    return new Promise((resolve, reject) => {
      const worker = new Worker(__filename, {
        workerData: raw,
      });
      worker.on("message", resolve);
      worker.on("error", reject);
      worker.on("exit", (code) => {
        if (code !== 0) {
          reject(new Error(`Worker stopped with exit code ${code}`));
        }
      });
    });
  };
} else {
  const result = doSomeHeavyComputing();
  parentPort.postMessage({ result });
}
