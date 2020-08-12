// Callback version
const { readFile } = require("fs");

function readJsonFile(file, cb) {
  readFile(file, (err, data) => {
    if (err) {
      // If error while reading file, propagate the error via callback
      return cb(err, null);
    }
    // Unexpected invalid JSON input, code will throw
    cb(err, JSON.parse(data));
  });
}
