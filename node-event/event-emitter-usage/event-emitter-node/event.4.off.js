var EventEmitter = require('events');

const myEmitter = new EventEmitter();

function c1() {
  console.log('an event occurred!');
}

myEmitter.on('eventOne', c1); // Register for eventOne

myEmitter.on('eventOne', function c2() {
  console.log('yet another event occurred!');
}); // Register for eventOne

myEmitter.off('eventOne', c1);

(function() {
  myEmitter.emit('eventOne');
})();
