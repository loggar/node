# Multi threading and multiple process in Node.js

Node.js is a single threaded language which in background uses multiple threads to execute asynchronous code.

Node.js is non-blocking which means that all functions ( callbacks ) are delegated to the event loop and they are ( or can be ) executed by different threads. That is handled by Node.js run-time.

* Node.js does support forking multiple processes ( which are executed on different cores ).
* It is important to know that state is not shared between master and forked process.
* We can pass messages to forked process ( which is different script ) and to master process from forked process with function send.

## Why and when we need to fork another process?

* Forking multiple processes is essential for freeing up memory and unloading single process.
* When we need to delegate tasks ( run them in parallel ) to another process for the sake of the speed.

