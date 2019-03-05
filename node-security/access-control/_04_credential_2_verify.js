// $ npm install --save credential

var pw = require('credential'),
  newPassword = 'I have a really great password.';

pw.hash(newPassword, function(err, hash) {
  if (err) {
    throw err;
  }
  console.log('Store the password hash.', hash);
});