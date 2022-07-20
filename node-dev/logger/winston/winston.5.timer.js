const { createLogger, format, transports } = require("winston");

const logger = createLogger({
  format: format.combine(format.timestamp(), format.json()),
  defaultMeta: {
    service: "billing-service",
  },
  transports: [new transports.Console({})],
});

logger.profile("test", { level: "info" });

// Returns an object corresponding to a specific timing
const profiler = logger.startTimer();

setTimeout(() => {
  // End the timer and log the duration
  profiler.done({ message: "Logging message" });
}, 1000);
