const fs = require("fs");
const async_hooks = require("async_hooks");

async_hooks
  .createHook({
    init(asyncId, type, triggerAsyncId) {
      fs.writeSync(
        1,
        `Init ${type} resource: asyncId: ${asyncId} trigger: ${triggerAsyncId}\n`
      );
    },
    destroy(asyncId) {
      const eid = async_hooks.executionAsyncId();
      fs.writeSync(
        1,
        `Destroy resource: execution: ${eid} asyncId: ${asyncId}\n`
      );
    },
  })
  .enable();

const eid = async_hooks.executionAsyncId();
fs.writeSync(1, `Calling setTimeout: execution: ${eid}\n`);
setTimeout(() => {
  const eid = async_hooks.executionAsyncId();
  fs.writeSync(1, `Inside setTimeout: execution: ${eid}\n`);
}, 0);
