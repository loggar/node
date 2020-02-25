const http = require("http");

http
  .get("http://www.mocky.io/v2/5e461c523300003800025f0e", response => {
    let r = "";

    // called when a data chunk is received.
    response.on("data", chunk => {
      r += chunk;
    });

    // called when the complete response is received.
    response.on("end", () => {
      console.log(JSON.parse(r));
    });
  })
  .on("error", error => {
    console.log("Error: " + error.message);
  });
