let autoIncrement = (function() {
  let number = 0;

  return function() {
    number++;
    return number;
  };
})();
