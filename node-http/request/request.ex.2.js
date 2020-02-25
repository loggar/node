const request = require("request");

request(
  "http://www.mocky.io/v2/5e461c523300003800025f0e",
  { json: true },
  (err, res, body) => {
    if (err) {
      return console.log(err);
    }
    console.log(body.id);
    console.log(body.title);
  }
);
