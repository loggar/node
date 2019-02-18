// Node.js v11 experimental
// Worker threads are still in the experimental phase but we can test them in NodeJS 11.x without the experimental flag.

const {
  Worker,
  isMainThread,
  parentPort,
  workerData
} = require('worker_threads');

const lib = require('./cheerio.ex.2.imdb');

if (isMainThread) {
  module.exports = async function scrap(id) {
    return new Promise((resolve, reject) => {
      const worker = new Worker(__filename, {
        workerData: id
      });
      worker.on('message', resolve);
      worker.on('error', reject);
      worker.on('exit', code => {
        if (code !== 0)
          reject(new Error(`Worker stopped with exit code ${code}`));
      });
    });
  };
} else {
  lib.getFull(workerData, (error, data) => {
    parentPort.postMessage(data);
  });
}
