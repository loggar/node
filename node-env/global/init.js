require('./global');
const isBrowserWindow = require('./is-browser-window');
const isNodeProcess = !isBrowserWindow;

// example: log
const log = console.log.bind(console);
if (isBrowserWindow) global.log = log;
if (isNodeProcess) global.log = log;
