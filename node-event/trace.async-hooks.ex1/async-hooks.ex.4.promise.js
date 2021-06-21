const fs = require("fs");
const async_hooks = require("async_hooks");

// Sync write to the console
const writeSomething = (phase, more) => {
  fs.writeSync(
    1,
    `Phase: "${phase}", Exec. Id: ${async_hooks.executionAsyncId()} ${
      more ? ", " + more : ""
    }\n`
  );
};

// Create and enable the hook
const timeoutHook = async_hooks.createHook({
  init(asyncId, type, triggerAsyncId) {
    writeSomething(
      "Init",
      `asyncId: ${asyncId}, type: "${type}", triggerAsyncId: ${triggerAsyncId}`
    );
  },
  before(asyncId) {
    writeSomething("Before", `asyncId: ${asyncId}`);
  },
  destroy(asyncId) {
    writeSomething("Destroy", `asyncId: ${asyncId}`);
  },
  after(asyncId) {
    writeSomething("After", `asyncId: ${asyncId}`);
  },
});
timeoutHook.enable();

writeSomething("Before call");

const calcPow = async (n, exp) => {
  writeSomething("Exec. Promise");

  return Math.pow(n, exp);
};

(async () => {
  await calcPow(3, 4);
})();
