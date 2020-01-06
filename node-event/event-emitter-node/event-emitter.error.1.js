const EventEmitter = require("events");
class Emitter extends EventEmitter {}
const eventEmitter = new Emitter();
eventEmitter.on("error", error => {
  console.log("Error occurred");
});
eventEmitter.emit("error", new Error("Error occurred"));
