var EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.on('eventOne', function c1() {
  console.log('an event occurred!');
}); // Register for eventOne

myEmitter.on('eventOne', function c2() {
  console.log('yet another event occurred!');
}); // Register for eventOne

(function() {
  myEmitter.emit('eventOne');
})();
