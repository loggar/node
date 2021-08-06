# node.js 15

## Unhandled rejected promises

The biggest breaking change in Node.js 15 is how unhandled rejected promises are handled. In Node.js 14, if you did not explicitly handle a rejected promise, you would see this warning:

```
(node:764) UnhandledPromiseRejectionWarning: something happened
(Use `node --trace-warnings ...` to show where the warning was created)
(node:764) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 2)
(node:764) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
```

The warning has now been replaced in Node.js 15 with an error:

```
node:internal/process/promises:218
          triggerUncaughtException(err, true /* fromPromise */);
          ^

[UnhandledPromiseRejection: This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). The promise rejected with the reason "recipe
could not be generated".] {
  code: 'ERR_UNHANDLED_REJECTION'
}
```

This change has the potential to impact many applications, especially for developers who ignored warning messages in the past. You can revert this behavior by starting Node.js with the new `--unhandled-rejections=warn` argument.
