import {PythonShell} from 'python-shell';

PythonShell.run('my_script.py', null, function (err) {
  if (err) throw err;
  console.log('finished');
});