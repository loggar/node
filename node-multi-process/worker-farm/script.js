// This will run in forked processes
module.exports = (input, callback) => {
  callback(null, input + " " + world);
};
