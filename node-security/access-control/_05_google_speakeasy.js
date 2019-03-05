// $ npm install --save speakeasy

var speakeasy = require('speakeasy');

// Returns a key object with ascii, hex, base32, and
// QR code representations (the QR code value is a
// Google image URL):
var key = speakeasy.generate_key({
  length : 20,
  google_auth_qr : true
});

// This should match the number on your phone:
speakeasy.time({
  key : key.base32,
  encoding : 'base32'
});