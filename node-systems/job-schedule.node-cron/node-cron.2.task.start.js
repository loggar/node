import * as cron from "node-cron";

const task = cron.schedule("*/5 8-18/2 * * *", () => {
  console.log("running a task every two hours between 8 a.m. and 5:58 p.m.");
});

task.start();
