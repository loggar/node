const workerFarm = require("worker-farm");
const service = workerFarm(require.resolve("./script"));

service("hello", function (err, output) {
  console.log(output);
});
