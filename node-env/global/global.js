if (typeof global === 'undefined') {
  global = {
    window
  };
} else {
  // node.js
  global.window = {};
}
exports = module.exports = global;
