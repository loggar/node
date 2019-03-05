/**
 * createSalt(keylength, callback) callback(err, salt)
 *
 * Generates a cryptographically secure random string for
 * use as a password salt using Node's built-in
 * crypto.randomBytes().
 *
 * @param  {Number} keyLength
 * @param  {Function} callback 
 * @return {undefined}
 */
var createSalt = function createSalt(keyLength, callback) {
  crypto.randomBytes(keyLength, function(err, buff) {
    if (err) {
      return callback(err);
    }
    callback(null, buff.toString('base64'));
  });
};