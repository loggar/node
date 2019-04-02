if (typeof global === 'undefined') {
  global = {
    window
  };
} else {
  // node.js
  global.window = {};
}

module.exports = global;
