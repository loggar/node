// With EcmaScript 6, this task has been really simplified and its pretty easier to handle and understand than with ES5.
// However it works in the same way: by using the extends keyword, your class can extend the EventEmitter inheriting obviously its method and therefore be able to use the emit method to trigger an event:

const EventEmitter = require('events');

class YourLibrary extends EventEmitter {
  constructor() {
    super();
  }

  testAsyncMethod(data) {
    this.emit('data', data);
  }
}

module.exports = YourLibrary;

// Then YourLibrary can be easily used from another file:
