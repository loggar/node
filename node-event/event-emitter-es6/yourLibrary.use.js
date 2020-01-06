const MyLibrary = require('./yourLibrary');

const libInstance = new MyLibrary();

libInstance.on('data', data => {
  // Outputs : Received data: "Hello World, data test"
  console.log(`Received data: "${data}"`);
});

libInstance.testAsyncMethod('Hello World, data test');

// As you can see, it's pretty easier than handling the same code with ES6.
