var pw = require('credential'),
  storedHash = '{"hash":...', // truncated to fit on page
  userInput = 'I have a really great password.';

pw.verify(storedHash, userInput, function(err, isValid) {
  var msg;
  if (err) {
    throw err;
  }
  msg = isValid ? 'Passwords match!' : 'Wrong password.';
  console.log(msg);
});