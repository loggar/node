const fs = require("fs");

const readPromise = function () {
  return new Promise(function (resolve, reject) {
    fs.readFile("./file.txt", function (err, data) {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

const writePromise = function () {
  return new Promise(function (resolve, reject) {
    fs.writeFile("./file.txt", "Hello world!!", function (err) {
      if (err) {
        reject(err);
      }
      resolve();
    });
  });
};

writePromise()
  .then(() => {
    return readPromise();
  })
  .then((data) => console.log(data.toString()))
  .catch((err) => console.log(err));
