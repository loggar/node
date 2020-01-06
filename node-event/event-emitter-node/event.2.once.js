var EventEmitter = require('events');

const myEmitter = new EventEmitter();

myEmitter.once('eventOnce', () => console.log('eventOnce once fired'));

(function() {
  myEmitter.emit('eventOnce');
  myEmitter.emit('eventOnce');
})();
