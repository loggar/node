const express = require("express");
const port = 3001;

const app = express();
console.log(`Worker ${process.pid} started`);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/slow", function (req, res) {
  console.time("slowApi");
  const baseNumber = 7;
  let result = 0;
  for (let i = Math.pow(baseNumber, 7); i >= 0; i--) {
    result += Math.atan(i) * Math.tan(i);
  }
  console.timeEnd("slowApi");

  console.log(`Result number is ${result} - on process ${process.pid}`);
  res.send(`Result number is ${result}`);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
