// joi usage: Adding query parameters support

const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const schemas = require("./joi.express.3.scheme");
const middleware = require("./joi.express.3.middleware");
var bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
app.get("/", (req, res) => res.send("Hello World!"));
app.post("/blog", middleware(schemas.blogPOST, "body"), (req, res) => {
  console.log("/update");
  res.json(req.body);
});
app.get("/products", middleware(schemas.blogLIST, "query"), (req, res) => {
  console.log("/products");
  const { page, pageSize } = req.query;
  res.json(req.query);
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
