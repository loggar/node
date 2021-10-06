// max-occur.js
// commonJS - no use babel for modular
const max = function max(arr = []) {
  // logic
  const t = {}; // {element : count}

  arr.forEach((item) => {
    let keys = Object.keys(item);
    // console.log(Array.isArray(keys), keys);
    keys.forEach((k) => {
      if (t.hasOwnProperty(item[k])) {
        t[item[k]]++;
      } else {
        t[item[k]] = 1;
      }
    });
  });

  // console.log(t);
  console.log(Object.values(t));
  const m = Math.max(...Object.values(t));
  // console.log(m);

  const r = [];
  let keys = Object.keys(t);
  keys.forEach((k) => {
    if (t[k] === m) {
      r.push(k);
    }
  });

  console.log({
    max: m,
    result: r,
  });

  return {
    max: m,
    result: r,
  };
};

module.exports = max;

/*
max([
  {
    a: "1",
    b: "2",
  },
  {
    a: "3",
    b: "1",
  },
  {
    a: "3",
    b: "4",
  },
]);
*/
