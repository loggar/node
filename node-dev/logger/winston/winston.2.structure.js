const { createLogger, format, transports } = require("winston");

const logger = createLogger({
  format: format.combine(format.timestamp(), format.json()),
  transports: [new transports.Console({})],
});

logger.info("System launch"); // {"level":"info","message":"System launch","timestamp":"2022-07-20T09:20:01.727Z"}
