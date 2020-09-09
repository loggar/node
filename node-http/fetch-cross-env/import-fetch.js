var org_fetch = fetch;
var fetch = fetch;

// node-process: use node-fetch
if (
  !(
    typeof fetch === "function" || toString.call(fetch) === "[object Function]"
  ) &&
  typeof module !== "undefined" &&
  module.exports
) {
  fetch = require("node-fetch");
}

console.log("fetch", typeof fetch);
console.log("org_fetch", typeof org_fetch);
console.log("fetch === org_fetch", fetch === org_fetch);

module.exports = fetch;
