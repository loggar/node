const AOP = require("./aop.simple.logger");

class MyBussinessLogic {
  add(a, b) {
    console.log("Calling add");
    return a + b;
  }

  concat(a, b) {
    console.log("Calling concat");
    return a + b;
  }

  power(a, b) {
    console.log("Calling power");
    return a ** b;
  }
}

const o = new MyBussinessLogic();

function loggingAspect(...args) {
  console.log("== Calling the logger function ==");
  console.log("Arguments received: " + args);
}

function printTypeOfReturnedValueAspect(value) {
  console.log("Returned type: " + typeof value);
}

AOP.inject(o, loggingAspect, "before", "methods");
AOP.inject(o, printTypeOfReturnedValueAspect, "afterReturning", "methods");

o.add(2, 2);
o.concat("hello", "goodbye");
o.power(2, 3);
