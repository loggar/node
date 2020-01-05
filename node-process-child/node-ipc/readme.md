# Communicate between 2 unrelated node processes

https://github.com/RIAEvangelist/node-ipc
https://github.com/RIAEvangelist/node-ipc/tree/master/example


If you have two independent NodeJS processes running and want them to communicate, this can be done reliably using a npm package: node-ipc

It works by creating a global pub-sub system, which from any NodeJS process you can subscribe and publish on.

```javascript
// process.1.js
const ipc = require('node-ipc');

ipc.config.id = 'a-unique-process-name1';
ipc.config.retry = 1500;
ipc.config.silent = true;
ipc.serve(() => ipc.server.on('a-unique-message-name', message => {
  console.log(message);
}));
ipc.server.start();

```

```javascript
// process.2.js
const ipc = require('node-ipc');

ipc.config.id = 'a-unique-process-name2';
ipc.config.retry = 1500;
ipc.config.silent = true;
ipc.connectTo('a-unique-process-name1', () => {
  ipc.of['jest-observer'].on('connect', () => {
    ipc.of['jest-observer'].emit('a-unique-message-name', "The message we send");
  });
});
```

1 Process should start the pub-sub server, which other processes can connect to.
