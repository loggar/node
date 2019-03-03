# client sessions

secure client-side sessions

```
npm install client-sessions
```

Basic usage:

```js
var sessions = require("client-sessions");
app.use(sessions({
  cookieName: 'mySession', // cookie name dictates the key name added to the request object
  secret: 'blargadeeblargblarg', // should be a large unguessable string
  duration: 24 * 60 * 60 * 1000, // how long the session will stay valid in ms
  activeDuration: 1000 * 60 * 5 // if expiresIn < activeDuration, the session will be extended by activeDuration milliseconds
}));

app.use(function(req, res, next) {
  if (req.mySession.seenyou) {
    res.setHeader('X-Seen-You', 'true');
  } else {
    // setting a property will automatically cause a Set-Cookie response
    // to be sent
    req.mySession.seenyou = true;
    res.setHeader('X-Seen-You', 'false');
  }
});
```

You can control more specific cookie behavior during setup:

```js
app.use(sessions({
  cookieName: 'mySession', // cookie name dictates the key name added to the request object
  secret: 'blargadeeblargblarg', // should be a large unguessable string
  duration: 24 * 60 * 60 * 1000, // how long the session will stay valid in ms
  cookie: {
    path: '/api', // cookie will only be sent to requests under '/api'
    maxAge: 60000, // duration of the cookie in milliseconds, defaults to duration above
    ephemeral: false, // when true, cookie expires when the browser closes
    httpOnly: true, // when true, cookie is not accessible from javascript
    secure: false // when true, cookie will only be sent over SSL. use key 'secureProxy' instead if you handle SSL not in your node process
  }
}));
```

You can have multiple cookies:

```js
// a 1 week session
app.use(sessions({
  cookieName: 'shopping_cart',
  secret: 'first secret',
  duration: 7 * 24 * 60 * 60 * 1000
}));

// a 2 hour encrypted session
app.use(sessions({
  cookieName: 'authenticated',
  secret: 'first secret',
  duration: 2 * 60 * 60 * 1000
}));
```

In this example, there's a 2 hour authentication session, but shopping carts persist for a week.

Finally, you can use requestKey to force the name where information can be accessed on the request object.

```js
var sessions = require("client-sessions");
app.use(sessions({
  cookieName: 'mySession',
  requestKey: 'forcedSessionKey', // requestKey overrides cookieName for the key name added to the request object.
  secret: 'blargadeeblargblarg', // should be a large unguessable string or Buffer
  duration: 24 * 60 * 60 * 1000, // how long the session will stay valid in ms
}));

app.use(function(req, res, next) {
  // requestKey forces the session information to be
  // accessed via forcedSessionKey
  if (req.forcedSessionKey.seenyou) {
    res.setHeader('X-Seen-You', 'true');
  }
  next();
});
```

## Cryptography

### Configuring Keys

To configure independent encryption and signature (HMAC) keys:

```js
app.use(sessions({
  // use WEAKER-than-default encryption:
  encryptionAlgorithm: 'aes128',
  encryptionKey: loadFromKeyStore('session-encryption-key'),
  // use a SHORTER-than-default MAC:
  signatureAlgorithm: 'sha256-drop128',
  signatureKey: loadFromKeyStore('session-signature-key'),
  // ... other options discussed above ...
}));
```

### Generating Keys

One can easily generate both AES and HMAC-SHA2 keys via command line: openssl rand -base64 32 for a 32-byte (256-bit) key. It's easy to then parse that output into a Buffer:

```js
function loadKeyFromStore(name) {
  var text = myConfig.keys[name];
  return new Buffer(text, 'base64');
}
```
