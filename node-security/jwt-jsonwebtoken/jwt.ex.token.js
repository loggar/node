const jwt = require("jsonwebtoken");

const token = jwt.sign(
  {
    data: "foobar",
  },
  "your-secret-key-here",
  { expiresIn: 60 * 60 }
); //1 hour

console.log(token);

const decodedToken = jwt.verify(token, "your-secret-key-here");
console.log(decodedToken);
