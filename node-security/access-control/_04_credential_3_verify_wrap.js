var users = require('./users.js');

var verify = function verify(username, password, verified) {
  var user = users.findOne(username);
  if (!user) {
    // No unexpected error, no user, reason for failure
    return verified(null, false, {
      message : 'User not found'
    });
  }

  pw.verify(user.hash, password, function(isValid) {
    if (!isValid) {
      // No unexpected error, no user, reason for failure
      return verified(null, false, {
        message : 'Incorrect password.'
      });
    }
    return verified(null, user);
  });
};