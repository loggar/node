var memwatch = require('node-memwatch');

// Take first snapshot
var hd = new memwatch.HeapDiff();
 
// do some things ...
 
// Take the second snapshot and compute the diff
var heap_diff = hd.end();

console.log('%o', heap_diff);
