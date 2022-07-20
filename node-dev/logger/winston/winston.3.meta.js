const { createLogger, format, transports } = require("winston");

const logger = createLogger({
  format: format.combine(format.timestamp(), format.json()),
  defaultMeta: {
    service: "billing-service",
  },
  transports: [new transports.Console({})],
});

logger.info("System launch"); // {"message":"System launch","level":"info"}
logger.error("A critical failure!"); // {"message":"A critical failure!","level":"fatal"}
