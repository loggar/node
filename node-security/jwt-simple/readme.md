# jwt simple app

- ref) https://dzone.com/articles/trust-but-verify-your-jwts

## Build a Simple Node App

```
npm install
```

`/verify` endpoint takes a JWT as a parameter to be decoded.

`index.js`

```js
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/create", (req, res) => {
  if (req.headers.authorization !== "Basic QXp1cmVEaWFtb25kOmh1bnRlcjI=") {
    res.set("WWW-Authenticate", 'Basic realm="401"');
    res.status(401).send("Try user: AzureDiamond, password: hunter2");
    return;
  }
  res.send("TODO: create a JWT");
});

app.get("/verify/:token", (req, res) => {
  res.send(`TODO: verify this JWT: ${req.params.token}`);
});

app.get("/", (req, res) => res.send("TODO: use Okta for auth"));

app.listen(port, () => console.log(`JWT server listening on port ${port}!`));
```

```
$ npx nodemon index.js
```

```
$ curl localhost:3000
TODO: use Okta for auth

$ curl localhost:3000/create
Try user: AzureDiamond, password: hunter2

$ curl AzureDiamond:hunter2@localhost:3000/create
TODO: create a JWT

$ curl localhost:3000/verify/asdf
TODO: verify this JWT: asdf
```

## Create JSON Web Tokens in Your Node App

There are a number of tools out there to create JWTs for various languages. For Node, one simple one is `njwt`. To add it to your project, run:

```
npm install njwt@0.4.0
```

`index.js`

```js
const jwt = require("njwt");

app.get("/create", (req, res) => {
  if (req.headers.authorization !== "Basic QXp1cmVEaWFtb25kOmh1bnRlcjI=") {
    res.set("WWW-Authenticate", 'Basic realm="401"');
    res.status(401).send("Try user: AzureDiamond, password: hunter2");
    return;
  }
  const claims = { iss: "fun-with-jwts", sub: "AzureDiamond" };
  const token = jwt.create(claims, "top-secret-phrase");
  token.setExpiration(new Date().getTime() + 60 * 1000);
  res.send(token.compact());
});
```

```
$ curl AzureDiamond:hunter2@localhost:3000/create
eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJmdW4td2l0aC1qd3RzIiwic3ViI......
```

## Verify JSON Web Tokens in Your Node App

`index.js`

```js
app.get("/verify/:token", (req, res) => {
  const { token } = req.params;
  jwt.verify(token, "top-secret-phrase", (err, verifiedJwt) => {
    if (err) {
      res.send(err.message);
    } else {
      res.send(verifiedJwt);
    }
  });
});
```

```
$ curl AzureDiamond:hunter2@localhost:3000/create
eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJmdW4td2l0aC1qd3RzIiwic3ViIjoiQXp1cmVEaWFtb25kIiwianRpIjoiYWYxYTgzOTktNDUzMy00MTA2LTllNTEtMjc3OWZiZDE4MDI5IiwiaWF0IjoxNTYzODQ0MDk0LCJleHAiOjE1NjM4NDQxNTR9.NrYOQh2GEwIpRHyww0hDd8XC2qpjeSRFATwoVfZx3Ag
```

```
http://localhost:3000/verify/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJmdW4td2l0aC1qd3RzIiwic3ViIjoiQXp1cmVEaWFtb25kIiwianRpIjoiYWYxYTgzOTktNDUzMy00MTA2LTllNTEtMjc3OWZiZDE4MDI5IiwiaWF0IjoxNTYzODQ0MDk0LCJleHAiOjE1NjM4NDQxNTR9.NrYOQh2GEwIpRHyww0hDd8XC2qpjeSRFATwoVfZx3Ag
```

result of `/verify`

```json
{ "header": { "typ": "JWT", "alg": "HS256" }, "body": { "iss": "fun-with-jwts", "sub": "AzureDiamond", "jti": "af1a8399-4533-4106-9e51-2779fbd18029", "iat": 1563844094, "exp": 1563844154 } }
```
