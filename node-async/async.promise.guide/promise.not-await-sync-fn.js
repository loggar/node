async function throwAsync() {
  await null; // need to await at least something to be truly async (see note #2)
  throw Error("with all frames present");
}

async function changedFromSyncToAsyncFn() {
  return await throwAsync();
}

async function asyncFn() {
  return await changedFromSyncToAsyncFn();
}

// 👍 now changedFromSyncToAsyncFn would present in the stacktrace
asyncFn().catch(console.log);
