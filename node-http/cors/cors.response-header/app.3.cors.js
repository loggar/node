const express = require("express");
const debug = require("debug")("server");

// NEW - bring in the cors library
const cors = require("cors");

const app = express();
const port = process.env.SERVER_PORT || 3001;

// NEW - replace custom middleware with the cors() middleware
app.use(cors());

app.get("/api/ping", (req, res) => {
  res.send({
    msg: "Hello, World"
  });
});

app.listen(port, () => debug(`Listening on port ${port}`));
