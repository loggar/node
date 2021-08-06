async function throwAsync() {
  await null; // need to await at least something to be truly async (see note #2)
  throw Error("missing syncFn in the stacktrace");
}

function syncFn() {
  return throwAsync();
}

async function asyncFn() {
  return await syncFn();
}

// 👎 syncFn would be missing in the stacktrace because it returns a promise while been sync
asyncFn().catch(console.log);
