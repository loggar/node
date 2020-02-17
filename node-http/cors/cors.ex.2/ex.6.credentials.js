const ALLOWED_ORIGINS = [
  "http://anotherthirdparty.com:8000",
  "http://thirdparty.com:8000"
];

app.get("/private", function(req, res) {
  if (ALLOWED_ORIGINS.indexOf(req.headers.origin) > -1) {
    res.set("Access-Control-Allow-Credentials", "true");
    res.set("Access-Control-Allow-Origin", req.headers.origin);
  } else {
    // allow other origins to make unauthenticated CORS requests
    res.set("Access-Control-Allow-Origin", "*");
  }

  // let caches know that the response depends on the origin
  res.set("Vary", "Origin");

  if (req.session.loggedIn === true) {
    res.send("THIS IS THE SECRET");
  } else {
    res.send("Please login first");
  }
});
