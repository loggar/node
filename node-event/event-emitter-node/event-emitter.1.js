const EventEmitter = require("events");

class Emitter extends EventEmitter {}
const eventEmitter = new Emitter();
eventEmitter.on("event", (a, b) => {
  console.log(a, b);
});

eventEmitter.emit("event", "a", "b");
