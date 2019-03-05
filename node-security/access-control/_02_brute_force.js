crypto.pbkdf2(password, salt,
  iterations, keyLength, function(err, hash) {
    if (err) {
      return callback(err);
    }
    callback(null, new Buffer(hash).toString('base64'));
  });