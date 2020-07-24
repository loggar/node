const fs = require("fs").promises;

const readFile = async path => {
  // Check if the path exists.
  const stats = await fs.stat(path);

  // Check if the path belongs to a file.
  if (!stats.isFile()) throw new Error("The path does not belong to a file");

  // Read file.
  return await fs.readFile(path);
};
