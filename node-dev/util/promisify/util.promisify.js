const util = require("util");
const fs = require("fs");

const readFilePromise = util.promisify(fs.readFile);
const statPromise = util.promisify(fs.stat);

const readFile = async path => {
  // Check if the path exists.
  const stats = await statPromise(path);

  // Check if the path belongs to a file.
  if (!stats.isFile()) throw new Error("The path does not belong to a file");

  // Read file.
  return await readFilePromise(path);
};
