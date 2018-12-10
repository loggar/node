console.log(process);
console.log(process.env);
console.log(process.env.DEBUG);

var debug;
if (process.env.DEBUG) {
  debug = function (data) {
    console.log(data);
  };
} else {
  debug = function () {};
}

debug('this is a debug call');

console.log('Hello World!');

debug('this another debug call');
