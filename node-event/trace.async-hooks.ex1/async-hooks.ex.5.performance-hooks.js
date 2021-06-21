const async_hooks = require("async_hooks");
const { performance, PerformanceObserver } = require("perf_hooks");

const hook = async_hooks.createHook({
  init(asyncId) {
    performance.mark(`init-${asyncId}`);
  },
  destroy(asyncId) {
    performance.mark(`destroy-${asyncId}`);
    performance.measure(
      `entry-${asyncId}`,
      `init-${asyncId}`,
      `destroy-${asyncId}`
    );
  },
});
hook.enable();

const observer = new PerformanceObserver((data) =>
  console.log(data.getEntries())
);
observer.observe({
  entryTypes: ["measure"],
  buffered: true,
});

setTimeout(() => {
  console.log("I'm a timeout");
}, 1200);
