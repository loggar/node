// Multiple event listeners can register for a single event. By default, the limit for the maximum number of event listeners is ten. We can change this with the defaultMxListeners function in the EventEmitter class. We can set it to any positive number. If it’s not a positive number, then a TypeError is thrown. If more listeners than the limit are registered then a warning will be output. For example, if we run the following code to register 11 event listeners for the “event” event:

const EventEmitter = require("events");
class Emitter extends EventEmitter {}
const eventEmitter = new Emitter();
const listener = () => {
  console.log("listening");
};

for (i = 1; i <= 11; i++) {
  eventEmitter.on("event", listener);
}

eventEmitter.emit("event");
