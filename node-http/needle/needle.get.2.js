const needle = require("needle");

needle("get", "http://www.mocky.io/v2/5e461c523300003800025f0e", { json: true })
  .then(res => {
    let r = res.body;
    console.log(r.count);
  })
  .catch(err => {
    console.log(err);
  });
