// This "possibly" works in one of the Threads in a pool
async function getWebContent(url) {
  // dummy example :) but it shows simple Promise use case
  const { data } = await fetch(url);
  return data;
}

// This Works in Main Event Loop Thread
(async () => {
  const html = await getWebContent("https://google.com");
  // Do something smart with this HTML code!!
  // OR JUS Log it
  console.log(html);
})();
