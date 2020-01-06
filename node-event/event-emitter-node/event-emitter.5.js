// Events are handled every time they’re emitted.

const EventEmitter = require("events");
class Emitter extends EventEmitter {}
const eventEmitter = new Emitter();
let x = 1;

eventEmitter.on("event", (a, b) => {
  console.log(x++);
});
for (let i = 0; i < 5; i++) {
  eventEmitter.emit("event");
}

// If we want to emit an event and handle it only the first time it’s emitted, then we use the eventEmitter.once() function
// eventEmitter.once('event', (a, b) => {
// ...
