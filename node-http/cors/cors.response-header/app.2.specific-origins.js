app.use(function(req, res, next) {
  const allowedOrigins = [
    "http://www.mydomain.com",
    "https://www.mydomain.com",
    "http://www.myotherdomain.com",
    "http://www.myotherdomain.com"
  ];
  const origin = req.headers.origin;
  if (allowedOrigins.indexOf(origin) > -1) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  return next();
});
