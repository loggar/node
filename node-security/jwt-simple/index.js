const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
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

app.get("/", (req, res) => res.send("TODO: use Okta for auth"));

app.listen(port, () => console.log(`JWT server listening on port ${port}!`));
