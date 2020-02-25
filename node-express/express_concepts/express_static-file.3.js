const express = require("express");
const app = express();

app.use(express.static("assets"));
app.use(express.static("public"));
app.use(express.static("files"));

app.use("/static", express.static("somedir"));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App is listening on port ${port}.`));
