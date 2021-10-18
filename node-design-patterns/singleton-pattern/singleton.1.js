let instance = null;

class SingletonClass {
  constructor() {
    this.value = Math.random(100);
  }

  printValue() {
    console.log(this.value);
  }

  static getInstance() {
    if (!instance) {
      instance = new SingletonClass();
    }

    return instance;
  }
}

module.exports = SingletonClass.getInstance();
// const SingletonInstance = require("./singleton.1");
// const obj1 = SingletonInstance;
// const obj2 = SingletonInstance;
// obj1.printValue();
// obj2.printValue();
// console.log("Equals:: ", obj1 === obj2);