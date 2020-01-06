const EventEmitter = require("events");

class Emitter extends EventEmitter {}
const eventEmitter = new Emitter();
eventEmitter.on("event", function(a, b) {
  console.log(a, b);
  console.log(`Instance of EventEmitter: ${this instanceof EventEmitter}`);
  console.log(`Instance of Emitter: ${this instanceof Emitter}`);
});
eventEmitter.emit("event", "a", "b");
