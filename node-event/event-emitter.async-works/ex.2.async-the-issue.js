async function someAsyncFunction(url) {
  // Some Async Stuff
}

(async () => {
  const urls = [
    "url1",
    "url2",
    "url3",
    "url4",
    "url5",
    "url6",
    "url7",
    "url8",
    "url9",
  ];
  const results = await Promise.all(urls.map((url) => someAsyncFunction(url)));
  console.log(results);
})();

// the results waits all the promise fulfilled.
