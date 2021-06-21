async function foo() {
  throw new Error();
}

foo() // 1. Unhandled at this point
  .catch(() => console.error("an error occured")); // 2. Now it's handled

try {
  await foo();
} catch (e) {
  // 3. Handled
  console.error("an error occured");
}

foo(); // 4. Unhandled, but execution continues

const rejected = foo(); // 5. Unhandled on current event loop turn, but handled
// in a future turn of the event loop when the
// setTimeout callback below is executed.
setTimeout(() => rejected.catch(() => console.error("an error occured")), 100);
