const EventEmitter = require("events");
class Emitter extends EventEmitter {}
const eventEmitter = new Emitter();
eventEmitter.on("error", error => {
  console.log(error);
});
eventEmitter.emit("error", new Error("Error occurred"));
