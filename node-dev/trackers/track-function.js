// Using closure to track how many times a function was called.

function tracker(fn) {
  let numTimesCalled = 0;
  return function() {
    numTimesCalled++;
    console.log("I was called", numTimesCalled);
    return fn();
  };
}

function hello() {
  console.log("hello");
}

const trackedHello = tracker(hello);
