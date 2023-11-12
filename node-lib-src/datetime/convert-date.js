function timestampToDate(timestamp, timeZone) {
  // Create a new Date object using the timestamp
  const date = new Date(timestamp);

  // Use Intl.DateTimeFormat to format the date in the specified time zone
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: timeZone,
  }).format(date);
}

function timestampsToDates(nts, tz) {
  const r = [];

  for (let i = 0; i < nts.length; i++) {
    r.push(timestampToDate(nts[i], tz));
  }

  return r;
}

function utcToTimezone(utcDate, timeZone) {
  // Use Intl.DateTimeFormat to format the date in AEST
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: timeZone,
  }).format(utcDate);
}

function utcsToTimezone(dates, tz) {
  const r = [];

  for (let i = 0; i < dates.length; i++) {
    r.push(utcToTimezone(dates[i], tz));
  }

  return r;
}

module.exports = {
  timestampToDate,
  timestampsToDates,
  utcToTimezone,
  utcsToTimezone,
};
