// joi usage

const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const schemas = require("./joi.express.2.scheme");
const middleware = require("./joi.express.2.middleware");
var bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
app.get("/", (req, res) => res.send("Hello World!"));
app.post("/blog", middleware(schemas.blogPOST), (req, res) => {
  console.log("/update");
  res.json(req.body);
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
