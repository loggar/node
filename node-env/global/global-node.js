(function() {
  console.log(global); // Object [global]
  console.log(this); // Object [global]
  console.log(global === this); // true
})();
