// Typically, most of modern Node.js/Express application code runs within promises – whether within the .then handler,
// a function callback or in a catch block. Surprisingly, unless a developer remembered to add a .catch clause, errors
// thrown at these places are not handled by the uncaughtException event-handler and disappear. Recent versions of Node
// added a warning message when an unhandled rejection pops, though this might help to notice when things go wrong but
// it's obviously not a proper error handling method. The straightforward solution is to never forget adding .catch
// clauses within each promise chain call and redirect to a centralized error handler. However, building your error
// handling strategy only on developer’s discipline is somewhat fragile. Consequently, it’s highly recommended using a
// graceful fallback and subscribe to process.on('unhandledRejection', callback) – this will ensure that any promise error,
// if not handled locally, will get its treatment.

Promise.resolve("promised value").then(() => {
  throw new Error("error1");
});

Promise.reject("error value").catch(() => {
  throw new Error("error2");
});

new Promise((resolve, reject) => {
  throw new Error("error3");
});
