# EventEmitter class

- https://medium.freecodecamp.org/how-to-code-your-own-event-emitter-in-node-js-a-step-by-step-guide-e13b7e7908e1
- https://nodejs.org/api/events.html

```js
class EventEmitter {
  listeners = {};  // key-value pair
  addListener(eventName, fn) {}
  on(eventName, fn) {}
  removeListener(eventName, fn) {}
  off(eventName, fn) {}
  once(eventName, fn) {}
  emit(eventName, ...args) { }
  listenerCount(eventName) {}
  rawListeners(eventName) {}
}
```

## 1. The addListener() method

Let us now implement the addListener method. It takes in an event name and a callback function to be executed.

```js
addListener(event, fn) {
    this.listeners[event] = this.listeners[event] || [];
    this.listeners[event].push(fn);
    return this;
  }
```

### A little explanation:

The addListener event checks if the event is already registered. If yes, returns the array, otherwise empty array.

```js
this.listeners[event] // will return array of events or undefined (first time registration)
```

Let’s understand this with a usage example. Let’s create a new eventEmitter and register a ‘test-event’. This is the first time the ‘test-event’ is being registered.

```js
const eventEmitter = new EventEmitter();
eventEmitter.addListener('test-event', ()=> { console.log ("test one") } 
);
```

Inside addListener () method:

```js
this.listeners[event] =>  this.listeners['test-event'] 
                  => undefined || []
                  => []
```

The result will be:

```js
this.listeners['test-event'] = [];  // empty array
```

and then the ‘fn’ will be pushed to this array as shown below:

```js
this.listeners['test-event'].push(fn);
```

## 2. The on method

This is just an alias to the ‘addListener’ method. We will be using the ‘on’ method more than the ‘addListener’ method for the sake of convenience.

```js
on(event, fn) {
  return this.addListener(event, fn);
}
```

3. The removeListener(event, fn) method

The removeListener method takes an eventName and the callback as the parameters. It removes said listener from the event array.

NOTE: If the event has multiple listeners then other listeners will not be impacted.

First, let’s take a look at the full code for removeListener.

```js
removeListener (event, fn) {
    let lis = this.listeners[event];
    if (!lis) return this;
    for(let i = lis.length; i > 0; i--) {
      if (lis[i] === fn) {
        lis.splice(i,1);
        break;
      }
    }
    return this;
}
```

Here’s the removeListener method explained step-by-step:

- Grab the array of listeners by ‘event’
- If none found return ‘this’ for chaining.
- If found, loop through all listeners. If the current listener matches with the ‘fn’ parameter use the splice method of the array to remove it. Break from the loop.
- Return ‘this’ to continue chaining.

## 4. The off(event, fn) method

This is just an alias to the ‘removeListener’ method. We will be using the ‘on’ method more than the ‘addListener’ method for sake of convenience.

```js
off(event, fn) {
  return this.removeListener(event, fn);
}
```

## 5. The once(eventName, fn) method

Adds a one-time listener function for the event named eventName. The next time eventName is triggered, this listener is removed and then invoked.

Use for setup/init kind of events.

Let’s take a peek at the code.

```js
once(eventName, fn) {
    this.listeners[event] = this.listeners[eventName] || [];
    const onceWrapper = () => {
      fn();
      this.off(eventName, onceWrapper);
    }
    this.listeners[eventName].push(onceWrapper);
    return this;
}
```

Here’s the once method explained step-by-step:

- Get the event array object. Empty array if the first time.
- Create a wrapper function called onceWrapper which will invoke the fn when the event is emitted and also removes the listener.
- Add the wrapped function to the array.
- Return ‘this’ for chaining.

## 6. The emit (eventName, ..args) method

Synchronously calls each of the listeners registered for the event named eventName, in the order they were registered, passing the supplied arguments to each.

Returns true if the event had listeners, false otherwise.

```js
emit(eventName, ...args) {
    let fns = this.listeners[eventName];
    if (!fns) return false;
    fns.forEach((f) => {
      f(...args);
    });
    return true;
}
```

Here’s the emit method explained step-by-step:

- Get the functions for said eventName parameter
- If no listeners, return false
- For all function listeners, invoke the function with the arguments
- Return true when done

## 7. The listenerCount (eventName) method

Returns the number of listeners listening to the event named eventName.

Here’s the source code:

```js
listenerCount(eventName) {
    let fns = this.listeners[eventName] || [];
    return fns.length;
}
```

Here’s the listenerCount method explained step-by-step:

- Get the functions/listeners under consideration or an empty array if none.
- Return the length.

## 8. The rawListeners(eventName) method

Returns a copy of the array of listeners for the event named eventName, including any wrappers (such as those created by .once()). The once wrappers in this implementation will not be available if the event has been emitted once.

```js
rawListeners(event) {
    return this.listeners[event];
}
```

## Full code for EventEmitter

```js
class EventEmitter {
  constructor() {
    this.listeners = {};
  }

  addListener(eventName, fn) {
    this.listeners[eventName] = this.listeners[eventName] || [];
    this.listeners[eventName].push(fn);
    return this;
  }
  // Attach event listener
  on(eventName, fn) {
    return this.addListener(eventName, fn);
  }

  // Attach event handler only once. Automatically removed.
  once(eventName, fn) {
    this.listeners[eventName] = this.listeners[eventName] || [];
    const onceWrapper = () => {
      fn();
      this.off(eventName, onceWrapper);
    };
    this.listeners[eventName].push(onceWrapper);
    return this;
  }

  // Alias for removeListener
  off(eventName, fn) {
    return this.removeListener(eventName, fn);
  }

  removeListener(eventName, fn) {
    let lis = this.listeners[eventName];
    if (!lis) return this;
    for (let i = lis.length; i > 0; i--) {
      if (lis[i] === fn) {
        lis.splice(i, 1);
        break;
      }
    }
    return this;
  }

  // Fire the event
  emit(eventName, ...args) {
    let fns = this.listeners[eventName];
    if (!fns) return false;
    fns.forEach(f => {
      f(...args);
    });
    return true;
  }

  listenerCount(eventName) {
    let fns = this.listeners[eventName] || [];
    return fns.length;
  }

  // Get raw listeners
  // If the once() event has been fired, then that will not be part of
  // the return array
  rawListeners(eventName) {
    return this.listeners[eventName];
  }
}

// Test cases

const myEmitter = new EventEmitter();

function c1() {
  console.log('an event occurred!');
}

function c2() {
  console.log('yet another event occurred!');
}

myEmitter.on('eventOne', c1); // Register for eventOne
myEmitter.on('eventOne', c2); // Register for eventOne

// Register eventOnce for one time execution
myEmitter.once('eventOnce', () => console.log('eventOnce once fired'));
myEmitter.once('init', () => console.log('init once fired'));

// Register for 'status' event with parameters
myEmitter.on('status', (code, msg) => console.log(`Got ${code} and ${msg}`));

myEmitter.emit('eventOne');

// Emit 'eventOnce' -> After this the eventOnce will be
// removed/unregistered automatically
myEmitter.emit('eventOnce');

myEmitter.emit('eventOne');
myEmitter.emit('init');
myEmitter.emit('init'); // Will not be fired
myEmitter.emit('eventOne');
myEmitter.emit('status', 200, 'ok');

// Get listener's count
console.log(myEmitter.listenerCount('event1'));

// Get array of rawListeners//
// Event registered with 'once()' will not be available here after the
// emit has been called
console.log(myEmitter.rawListeners('event1'));

// Test case 2
class WithTime extends EventEmitter {
  execute(asyncFunc, ...args) {
    this.emit('begin');
    console.time('execute');
    this.on('data', data => console.log('got data ', data));
    asyncFunc(...args, (err, data) => {
      if (err) {
        return this.emit('error', err);
      }
      this.emit('data', data);
      console.timeEnd('execute');
      this.emit('end');
    });
  }
}

var fetch = require('node-fetch');
const withTime = new WithTime();

withTime.on('begin', () => console.log('About to execute'));
withTime.on('end', () => console.log('Done with execute'));

const readFile = (url, cb) => {
  fetch(url)
    .then(resp => resp.json()) // Transform the data into json
    .then(function(data) {
      cb(null, data);
    });
};

withTime.execute(readFile, 'https://loggar.github.io/note/sample-res/sample.1.json');

myEmitter.off('eventOne', c1);
myEmitter.off('eventOne', c2);

// This will be printed before withTime (as withTime readFile is async)
console.log(myEmitter.listenerCount('eventOne'));
console.log(withTime.rawListeners('begin'));
```