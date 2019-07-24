const { performance } = require("perf_hooks");

function fibonacci(n) {
  if (n === 0 || n === 1) return n;
  else return fibonacci(n - 1) + fibonacci(n - 2);
}

var memoizeFibonacci = function() {
  var memo = {};

  function f(n) {
    var value;

    if (n in memo) {
      value = memo[n];
    } else {
      if (n === 0 || n === 1) value = n;
      else value = f(n - 1) + f(n - 2);

      memo[n] = value;
    }

    return value;
  }

  return f;
};

//un-optimized
// time before function is executed
const startTime = performance.now();
fibonacci(40);
// time after function has completed computation
const endTime = performance.now();

console.log("Un-optimized time", endTime - startTime);

// memoized
const startTime2 = performance.now();
memoizeFibonacci(40);
// time after function has completed computation
const endTime2 = performance.now();

console.log("Optimized time", endTime2 - startTime2);
