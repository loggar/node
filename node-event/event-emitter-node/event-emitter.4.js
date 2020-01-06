// EventEmitter calls all listeners synchronously, in the order that they’re registered. This eliminates the chance of race conditions and other logic errors. To handle events asynchronously, we can use the setImmediate() or the process.nextTick() methods:

const EventEmitter = require("events");

class Emitter extends EventEmitter {}
const eventEmitter = new Emitter();
eventEmitter.on("event", (a, b) => {
  setImmediate(() => {
    console.log("event handled asychronously");
  });
});
eventEmitter.emit("event", "a", "b");

// In the code above, we put the console.log inside a callback function of the setImmediate function, which will run the event handling code asynchronously instead of synchronously.
