function getCurrentTimeZone() {
  console.log(Intl.DateTimeFormat().resolvedOptions());
  return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

console.log(getCurrentTimeZone());
