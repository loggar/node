const http = require("http");

http
  .request("http://a.b.c/1", function (res) {
    let data = "";
    res.setEncoding("utf8");
    res.on("data", function (chunk) {
      data += chunk;
    });
    res.on("end", function () {
      console.log(JSON.parse(data));
    });
  })
  .end();
