const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello world!");
});

// Define the error handler after other middleware and endpoints.
app.use(errorHandler);

app.listen(port);

/**
 * Error handling middleware.
 */
function errorHandler(err, req, res, next) {
  logError(err);

  if (err.statusCode) {
    // All errors that have a status code are safe.
    res.status(err.statusCode).send({ error: err.message });
  } else {
    res.status(500).send({ error: "Something went wrong" });
  }
}
