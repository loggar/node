const dateConvertor = require("./convert-date");

// const timeZone = 'America/New_York'; // Example time zone
const timeZone = "Australia/Sydney";
// const ts = Date.now(); // Current timestamp
const timestamps = [
  new Date(),
  new Date("2023-11-10T12:00:00Z"),
  new Date("2023-11-10T12:01:00Z"),
  new Date("2023-11-10T12:01:01Z"),
];

// node ./node-lib-src/datetime/ex.utc-to-zone-convertor.js
const dates = dateConvertor.utcsToTimezone(timestamps, timeZone);

for (let i = 0; i < timestamps.length; i++) {
  console.log("UTC:", timestamps[i], "Date:", dates[i]);
}
