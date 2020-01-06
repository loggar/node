// However, if we call setMaxListeners to set it to getMaxListeners() + 1, which is 11 listeners, as seen in the following code:

const EventEmitter = require("events");
class Emitter extends EventEmitter {}
const eventEmitter = new Emitter();
eventEmitter.setMaxListeners(eventEmitter.getMaxListeners() + 1);
const listener = () => {
  console.log("listening");
};

for (i = 1; i <= 11; i++) {
  eventEmitter.on("event", listener);
}

eventEmitter.emit("event");
