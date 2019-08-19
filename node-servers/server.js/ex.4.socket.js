// chat/router.js
const { socket } = require('server/router');
const ctrl = require('./controller');
 
module.exports = [
  socket('connect', ctrl.join),
  socket('message', ctrl.message),
  socket('disconnect', ctrl.leave)
];
