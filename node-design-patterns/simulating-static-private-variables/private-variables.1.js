const autoIncrementer = (function() {
  let value = 0;

  return {
    incr() {
      value++;
    },

    get value() {
      return value;
    }
  };
})();
autoIncrementer.incr();
// undefined
autoIncrementer.incr();
// undefined
autoIncrementer.value;
// 2
autoIncrementer.value = 3;
// 3
autoIncrementer.value;
// 2
