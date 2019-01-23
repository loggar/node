const M = require("module");
const path = require("path");
const fetch = require("node-fetch");

function moduleFromString(code, filename) {
  if (!filename || typeof filename !== "string") {
    filename = "";
  }

  if (!code || typeof code !== "string") {
    throw new Error("code ", typeof code, code);
  }

  let m = new M(filename, module.parent);
  m.filename = filename;
  m.paths = M._nodeModulePaths(path.dirname(filename));
  m._compile(code, filename);

  return m.exports;
}

async function moduleFromUrl(url, filename) {
  if (!filename || typeof filename !== "string") {
    filename = "";
  }
  const res = await fetch(url);
  const code = await res.text();
  return moduleFromString(code, filename);
}

module.exports = {
  moduleFromString,
  moduleFromUrl
};
