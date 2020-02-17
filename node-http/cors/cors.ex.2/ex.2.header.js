app.get("/public", function(req, res) {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  res.send(
    JSON.stringify({
      message: "This is public info"
    })
  );
});
