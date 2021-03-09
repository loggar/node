const express = require("express");
const cookieParser = require("cookie-parser");
const csrf = require("csurf");
const bodyParser = require("body-parser");

// setup route middlewares
const csrfProtection = csrf({ cookie: true });
const parseForm = bodyParser.urlencoded({ extended: false });

// create express app
const app = express();

// we need this because "cookie" is true in csrfProtection
app.use(cookieParser());

app.get("/form", csrfProtection, function (req, res) {
  // pass the csrfToken to the view
  res.render("send", { csrfToken: req.csrfToken() });
});

app.post("/process", parseForm, csrfProtection, function (req, res) {
  res.send("data is being processed");
});

app.listen(3000);

// On the web page, you need to create a hidden input type with the value of the CSRF token. For example.
/*
form action="/process" method="POST">
  <input type="hidden" name="_csrf" value="{{csrfToken}}">

  Favorite color: <input type="text" name="favoriteColor">
  <button type="submit">Submit</button>
</form>
*/

// In the case of AJAX requests, you can pass the CSRF token in the header.
/*
var token = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
  headers: {
    'CSRF-Token': token
  }
*/
