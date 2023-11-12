const dateConvertor = require("./convert-date");

function nanosecondsToMilliseconds(nanoseconds) {
  // Convert nanoseconds to milliseconds using BigInt
  const millisecondsBigInt = nanoseconds / BigInt(1000000);

  // Convert BigInt to a regular number (safe for this range)
  return Number(millisecondsBigInt);
}

// const timeZone = 'America/New_York'; // Example time zone
const timeZone = "Australia/Sydney";
// const ts = Date.now(); // Current timestamp
const timestamps = [
  Date.now(),
  nanosecondsToMilliseconds(BigInt(1698027616289927859n)),
  nanosecondsToMilliseconds(BigInt(1698027616289927860n)),
  nanosecondsToMilliseconds(BigInt(1698027616289927861n)),
];

// node ./node-lib-src/datetime/ex.timestamp-convertor.js
const dates = dateConvertor.timestampsToDates(timestamps, timeZone);
console.log(dates);
