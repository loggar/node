import request from "request";

request("http://www.google.com", (error, response, body) => {
  console.log("error:", error);
  console.log("statusCode:", response && response.statusCode);
  console.log("body:", body);
});
