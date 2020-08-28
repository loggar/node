const Bree = require("bree");
const bree = new Bree({
  jobs: [
    // runs the job on Start
    "test",
    {
      name: "sample",
      interval: "5s",
    },
  ],
});
bree.start();
