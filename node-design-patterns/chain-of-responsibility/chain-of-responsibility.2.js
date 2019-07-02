var app = express();

app.use(function(req, res, next) {
  console.log("Time:", Date.now());
  next(); //call the next function on the chain
});
