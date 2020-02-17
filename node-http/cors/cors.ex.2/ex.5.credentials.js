app.get("/private", function(req, res) {
  res.set("Access-Control-Allow-Origin", "http://thirdparty.com:8000");
  res.set("Access-Control-Allow-Credentials", "true");
  if (req.session.loggedIn === true) {
    res.send("THIS IS THE SECRET");
  } else {
    res.send("Please login first");
  }
});
