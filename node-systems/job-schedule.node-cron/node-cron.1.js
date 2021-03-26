// npm install --save node-cron

import * as cron from "node-cron";

// cron.schedule(cronExpression: string, task: Function, options: Object)

cron.schedule("5 * * * * *", () => {
  console.log("running a task every minute at the 5th second");
});

cron.schedule("3 5 * * *", () => {
  console.log("running a task every day at 5:03 am");
});

cron.schedule("0 16 * * friday", () => {
  console.log("running a task every Friday at 4:00 pm");
});

cron.schedule("2 3 1 1,4,7,10 *", () => {
  console.log("running a task every quarter on the first day of the month");
});

cron.schedule("5 10-18 * * *", () => {
  console.log(
    "running a task five minutes past every hour between 10am and 6pm"
  );
});

cron.schedule("*/5 8-18/2 * * *", () => {
  console.log("running a task every two hours between 8 a.m. and 5:58 p.m.");
});
