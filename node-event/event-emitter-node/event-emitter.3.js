const EventEmitter = require("events");

class Emitter extends EventEmitter {}
const eventEmitter = new Emitter();
eventEmitter.on("event", (a, b) => {
  console.log(a, b);
  console.log(`Instance of EventEmitter: ${this instanceof EventEmitter}`);
  console.log(`Instance of Emitter: ${this instanceof Emitter}`);
});
eventEmitter.emit("event", "a", "b");

// This is because arrow functions do not change the this object inside it. However, tradition functions do change the content of the this object.
