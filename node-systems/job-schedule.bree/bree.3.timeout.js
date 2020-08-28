const Bree = require("bree");
const bree = new Bree({
  jobs: [
    // runs the job on Start
    "test",
    {
      name: "sample",
      timeout: "30s", //run the script after 30 seconds from the start
    },
  ],
});
bree.start();
