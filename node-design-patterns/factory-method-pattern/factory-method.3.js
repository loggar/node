// Use case
if (err) {
  res.json({ error: true, message: "Error message here" });
}

if (err) {
  res.json(ErrorFactory.getError(err));
}
