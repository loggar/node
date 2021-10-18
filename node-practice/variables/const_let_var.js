const a = 3;

// a = 4;

const b = {
  a: 2,
};

b.a = 3;

console.log(b);

function fn1() {
  function fn2() {
    const x = 1;
  }
  const y = 1;
  console.log(x); // x is not defined
}

function fn3() {
  function fn3() {
    let x = 1;
  }
  let y = 2;
  console.log(x); // x is not defined
}

function fn5() {
  function fn6() {
    var x = 1;
  }
  var y = 3;
  console.log(x); // x is not defined
}

console.log(y); // y is not defined
