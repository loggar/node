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

async function start() {
  await writePromise();
  // data returned as if it were from a synchronous function
  const data = await readPromise();
  console.log(data.toString());
}

start();
