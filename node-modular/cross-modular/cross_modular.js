const a_module = (function(a1) {
  var data = a1;
  return {
    get: function() {
      return data;
    }
  };
})(3);

if (typeof module !== 'undefined' && module.exports) {
  module.exports = a_module;
} else {
  // windows.a_module;
}
