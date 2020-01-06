var EventEmitter = require('events');
var fetch = require('node-fetch');

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
withTime.execute(
  readFile,
  'https://loggar.github.io/note/sample-res/sample.1.json'
);
