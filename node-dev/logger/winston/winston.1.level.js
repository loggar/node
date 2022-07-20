const { createLogger, format, transports } = require("winston");

const logLevels = {
  fatal: 0,
  error: 1,
  warn: 2,
  info: 3,
  debug: 4,
  trace: 5,
};

const logger = createLogger({
  levels: logLevels,
  transports: [new transports.Console()],
});

logger.info("System launch"); // {"message":"System launch","level":"info"}
logger.fatal("A critical failure!"); // {"message":"A critical failure!","level":"fatal"}
