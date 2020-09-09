var fetch = require("./import-fetch");

fetch("https://loggar.github.io/note/sample-res/sample.1.json")
  .then(response => response.json())
  .then(user => console.log(user.id));
