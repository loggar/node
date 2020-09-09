const timeConsumingOperationWithThreads = require("./heavy-computing-with-threads");

/* ... */

app.get("/timeConsumingEndpoint", async (req, res) => {
  const result = await timeConsumingOperationWithThreads();
  res.send(result);
});
