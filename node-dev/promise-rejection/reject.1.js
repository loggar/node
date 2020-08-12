Promise.reject(new Error()); // This will result in a rejection

new Promise((fulfill, reject) => {
  reject(new Error()); // This will result in a rejection
});

new Promise(() => {
  throw new Error(); // This will result in a rejection
});

Promise.resolve().then(() => {
  throw new Error(); // This will result in a rejection
});

Promise.reject().then(
  () => {},
  () => {
    throw new Error(); // This will result in a rejection
  }
);

Promise.reject().catch(() => {
  throw new Error(); // This will result in a rejection
});

Promise.resolve().finally(() => {
  throw new Error(); // This will result in a rejection
});

async function foo() {
  throw new Error(); // This will result in a rejection
}

async function bar(a) {
  if (a === undefined) a(); // This will result in a rejection
}
