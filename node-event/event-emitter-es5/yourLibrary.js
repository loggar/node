// If you're using ECMAScript 5, the usage of event emitters couldn't be so clear for beginners in Javascript:

// Instantiate event emitter and inherits
var EventEmitter = require('events');
var inherits = require('util').inherits;

// Create the constructor of YourLibrary and add the EventEmitter to the this context
function YourLibrary() {
  EventEmitter.call(this);
}

// Use Inheritance to add the properties of the DownloadManager to event emitter
inherits(YourLibrary, EventEmitter);

// When EventEmitter.call(this) is executed during the creation of an instance from YourLibrary, it appends properties declared from the EventEmitter constructor to YourLibrary.
// Then the inherits function inherits the prototype methods from one constructor into another (your constructor YourLibrary and the super constructor EventEmitter),
// in this way the prototype of your constructor will be set to a new object created from superConstructor.

// As your library obviously won't offer the same methods of EventEmitter you need to add your own functions to YourLibrary by using prototyping before or after the module.exports line:

YourLibrary.prototype.testAsyncMethod = function testAsyncMethod(someData) {
  _this = this;

  // Execute the data event in 2 seconds
  setTimeout(function() {
    // Emit the data event that sends the same data providen by testAsyncMethod
    _this.emit('data', someData);
  }, 2000);
};

// The previous function adds the testAsyncMethod to your library, this method expects some data as first argument and it will sent again through the data event,
// emitted with the inherited method emit from the EventEmitter class.
// In this way YourLibrary uses the event manager of Node.js and it can be used to create organized and easy to read code:

// Export YourLibrary !
module.exports = YourLibrary;
