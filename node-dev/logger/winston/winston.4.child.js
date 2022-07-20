const { createLogger, format, transports } = require("winston");

const logger = createLogger({
  format: format.combine(format.timestamp(), format.json()),
  defaultMeta: {
    service: "billing-service",
  },
  transports: [new transports.Console({})],
});

const ctx = {
  userId: "090121",
  productId: "creme-de-la-creme",
};

logger.child({ context: ctx }).info('Order "1234" was processed successfully');
// {"context":{"userId":"090121","productId":"creme-de-la-creme"},"message":"Order \"1234\" was processed successfully","level":"info","service":"billing-service","timestamp":"2021-07-29T12:20:13.249Z"}
