const fetch = require("node-fetch");

fetch("http://www.mocky.io/v2/5e461c523300003800025f0e")
  .then(res => res.json()) // expecting a json response
  .then(json => {
    console.log(json);
  })
  .catch(err => {
    console.log(err);
  });
