// npm i koa-logger

const Logger = require("koa-logger");

app.use(Logger()).use(router.routes()).use(router.allowedMethods());
