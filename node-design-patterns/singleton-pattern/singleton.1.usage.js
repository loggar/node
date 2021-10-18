const SingletonInstance = require("./singleton.1");

const obj1 = SingletonInstance;
const obj2 = SingletonInstance;

obj1.printValue();
obj2.printValue();

console.log("Equals:: ", obj1 === obj2);
