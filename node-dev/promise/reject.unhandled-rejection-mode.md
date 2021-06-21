# promise

## unhandled rejection mode

Using the listeners requires changing the application code, and the behavior can be overridden by any dependency. To circumvent those limitations, a new flag (--unhandled-rejection=[mode]) was added to Node.js. This flag supports five different modes:

- strict: raise an uncaught exception similar to throw new Error() that is not caught. unhandledRejection listeners do not prevent raising the exception
- throw: raise an uncaught exception similar to throw new Error() that is not caught. unhandledRejection listeners take precedence and prevent raising the exception
- warn: outputs a warning as soon as possible. Continues running after the warning is emitted. If the process exits and no status code was set, the process exits with a success code. This is similar to what browser consoles do
- warn-with-error-code: outputs a warning as soon as possible. Continues running after the warning is emitted. If the process exits and no status code was set, the process exits with an error code
- none: do nothing

For all the modes, the action (raise an exception output a warning) will happen on nextTick. strict mode circumvents the problem stated above since it prevents dependencies from overriding the unhandleRejection listener. warn is similar to the current behavior but without a deprecation warning.

Either the listener and flag can be used to mitigate issues with unhandled rejections.
