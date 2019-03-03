var fs = require("fs");
var asyncHooks = require("async_hooks");

var hooks = {
  init: function init(asyncId, type, triggerId) {
    fs.writeSync(1, `asyncHooks init ${asyncId} ${type} ${triggerId} \n`);
  },
  before: function before(asyncId) {
    fs.writeSync(1, `asyncHooks before ${asyncId} \n`);
  },
  after: function after(asyncId) {
    fs.writeSync(1, `asyncHooks after ${asyncId} \n`);
  },
  destroy: function destroy(asyncId) {
    fs.writeSync(1, `asyncHooks destroy ${asyncId} \n`);
  },
  promiseResolve: function promiseResolve(asyncId) {
    fs.writeSync(1, `asyncHooks promiseResolve ${asyncId} \n`);
  }
};
var asyncHook = asyncHooks.createHook(hooks);

var http = require("http");
// asyncHook being defined in code snippet above
asyncHook.enable();
http
  .createServer(function(req, res) {
    res.end("hello qts");
  })
  .listen(8079);
