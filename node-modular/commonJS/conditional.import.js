const { getA, getB } = process.env.ENV_VALUE !== "selectModuleB" ? require("./moduleA") : require("./moduleB");
export { getA, getB };
