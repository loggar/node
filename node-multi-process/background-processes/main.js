// Runs `script.js` in a new environment without sharing memory.
const service = createService("script.js");
// We send an input and receive an output
service.compute(data, function(err, result) {
  // result available here
});
