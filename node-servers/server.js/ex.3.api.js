// books/router.js
const { get, post, put, del } = require('server/router');
const ctrl = require('./controller');
 
module.exports = [
  get('/book', ctrl.list),
  get('/book/:id', ctrl.item),
  post('/book', ctrl.create),
  put('/book/:id', ctrl.update),
  del('/book/:id', ctrl.delete)
];
