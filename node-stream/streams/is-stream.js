var stream = require("stream");
var fs = require("fs");

function isReadableStream(obj) {
  console.log("obj instanceof stream.Stream", obj instanceof stream.Stream);
  console.log(
    "typeof obj._read === 'function'",
    typeof obj._read === "function"
  );
  console.log(
    "typeof obj._readableState === 'object'",
    typeof obj._readableState === "object"
  );

  return (
    obj instanceof stream.Stream &&
    typeof obj._read === "function" &&
    typeof obj._readableState === "object"
  );
}

console.log(isReadableStream(fs.createReadStream("car.jpg"))); // true
console.log(isReadableStream({})); // false
console.log(isReadableStream("")); // false
