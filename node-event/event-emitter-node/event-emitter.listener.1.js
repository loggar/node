const EventEmitter = require("events");
class Emitter extends EventEmitter {}
const eventEmitter = new Emitter();
eventEmitter.on("newListener", (event, listener) => {
  console.log("New Listener Registered", event, listener);
});

let x = 1;
eventEmitter.on("event", (a, b) => {
  console.log(x++);
});
