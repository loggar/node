const express = require("express");
const app = express();
const fs = require("fs");
const port = process.env.PORT || 3000;

// viewed at http://localhost:3000
app.get("/", function(req, res) {
  res.send("Again I Go Unnoticed");
});

app.get("/read", function(req, res) {
  // this does not exist
  fs.createReadStream("my-self-esteem.txt");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
