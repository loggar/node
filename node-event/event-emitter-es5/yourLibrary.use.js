// Require YourLibrary file
var YourLibrary = require('./yourLibrary');

// Create an instance of YourLibrary
var libInstance = new YourLibrary();

// Add the "data" event listener to your library and add some callback
libInstance.on('data', function(data) {
  // Outputs: "Hello World, data test"
  console.log(data);
});

// Execute the testAsyncMethod of your library
libInstance.testAsyncMethod('Hello World, data test');

// Although to handle asynchronous events can be a little bit tricky, everything will make sense at the end, so if you don't understand it yet, be patient and analyse the example carefully.
