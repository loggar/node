(async () => {
  await assert.rejects(
    async () => {
      throw new TypeError("Wrong value");
    },
    {
      name: "TypeError",
      message: "Wrong value",
    }
  );
})();

assert.rejects(Promise.reject(new Error("Wrong value")), Error).then(() => {
  // ...
});
