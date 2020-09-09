const { PythonShell } = require('python-shell');

let options = {
  mode: 'text',
  pythonOptions: ['-u'], // get print results in real-time
  args: ['value1', 'value2', 'value3']
};

PythonShell.run('../test/python/echo_args.py', options, function(err, results) {
  if (err) throw err;
  // results is an array consisting of messages collected during execution
  console.log('results: %j', results);
});
