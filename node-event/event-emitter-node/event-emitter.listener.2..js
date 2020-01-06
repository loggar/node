const EventEmitter = require("events");

class Emitter extends EventEmitter {}
const eventEmitter = new Emitter();
const listener = () => {
  console.log("listening");
};

eventEmitter.on("event", listener);

setInterval(() => {
  eventEmitter.emit("event");
}, 300);

setTimeout(() => {
  console.log("removing");
  eventEmitter.removeListener("event", listener);
}, 2000);
