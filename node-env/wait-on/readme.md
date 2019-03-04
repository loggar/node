# wait-on

a cross-platform command line utility which will wait for files, ports, sockets, and http(s) resources to become available (or not available using reverse mode)

```
npm install wait-on
```

## npm task usage

```json
"scripts": {
  "test:system": "npm-run-all build -p -r serve test",
  "build": "webpack",
  "serve": "serve -p 8000",
  "test": "wait-on http://localhost:8001 && npm run test:codecept",
  "test:codecept": "codecept"
},
```

## cli usage

```
wait-on file1 && NEXT_CMD # wait for file1, then exec NEXT_CMD 
wait-on f1 f2 && NEXT_CMD # wait for both f1 and f2, the exec NEXT_CMD 
wait-on http://localhost:8000/foo && NEXT_CMD # wait for http 2XX HEAD 
wait-on https://myserver/foo && NEXT_CMD # wait for https 2XX HEAD 
wait-on http-get://localhost:8000/foo && NEXT_CMD # wait for http 2XX GET 
wait-on https-get://myserver/foo && NEXT_CMD # wait for https 2XX GET 
wait-on tcp:4000 && NEXT_CMD # wait for service to listen on a TCP port 
wait-on socket:/path/mysock # wait for service to listen on domain socket 
wait-on http://unix:/var/SOCKPATH:/a/foo # wait for http HEAD on domain socket 
wait-on http-get://unix:/var/SOCKPATH:/a/foo # wait for http GET on domain socket
```

## node.js usage

```js
var waitOn = require('wait-on');
var opts = {
  resources: [
    'file1',
    'http://foo.com:8000/bar',
    'https://my.com/cat',
    'http-get://foo.com:8000/bar',
    'https-get://my.com/cat',
    'tcp:foo.com:8000',
    'socket:/my/sock',
    'http://unix:/my/sock:/my/url',
    'http-get://unix:/my/sock:/my/url'
  ],
  delay: 1000, // initial delay in ms, default 0
  interval: 100, // poll interval in ms, default 250ms
  timeout: 30000, // timeout in ms, default Infinity
  tcpTimeout: 1000, // tcp timeout in ms, default 300ms
  window: 1000, // stabilization time in ms, default 750ms
 
  // http options
  ca: [ /* strings or binaries */ ],
  cert: [ /* strings or binaries */ ],
  key: [ /* strings or binaries */ ],
  passphrase: 'yourpassphrase',
  auth: {
    user: 'theuser', // or username
    pass: 'thepassword' // or password
  },
  httpSignature: {
    keyId: 'yourKeyId',
    key: 'yourKey'
  },
  strictSSL: false,
  followAllRedirects: true,
  followRedirect: true,
  headers: {
    'x-custom': 'headers'
  }
};
 
// Usage with callback function
waitOn(opts, function (err) {
  if (err) { return handleError(err); }
  // once here, all resources are available
});
 
// Usage with promises
waitOn(opts)
  .then(function () {
    // once here, all resources are available
  })
  .catch(function (err) {
    handleError(err);
  });
 
// Usage with async await
try {
  await waitOn(opts);
  // once here, all resources are available
} catch (err) {
  handleError(err);
}
```
