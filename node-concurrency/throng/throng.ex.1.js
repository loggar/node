const throng = require("throng");

throng({
  workers: 16,
  grace: 1000,
  master: masterFunction,
  start: startFunction,
});

// Handle signals (for cleanup on a kill signal, for instance):
throng((id) => {
  console.log(`Started worker ${id}`);

  process.on("SIGTERM", function () {
    console.log(`Worker ${id} exiting`);
    console.log("Cleanup here");
    process.exit();
  });
});

// Options
throng(
  {
    workers: 4, // Number of workers (cpu count)
    lifetime: 10000, // ms to keep cluster alive (Infinity)
    grace: 4000, // ms grace period after worker SIGTERM (5000)
  },
  startFn
);
