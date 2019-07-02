const Singleton = require("./singleton.1");

const obj = Singleton.getInstance();
const obj2 = Singleton.getInstance();

obj.printValue();
obj2.printValue();

console.log("Equals:: ", obj === obj2);
