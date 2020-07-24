var parse = require('url').parse;

function route_simple(obj) {
  return function(req, res, next){
    if (!obj[req.method]) {
      next();
      return;
    }
    var routes = obj[req.method];
    var url = parse(req.url);
    var paths = Object.keys(routes);

    for (var i = 0; i < paths.length; i++) {
      var path = paths[i];
      var fn = routes[path];
      path = path
        .replace(/\//g, '\\/')
        .replace(/:(\w+)/g, '([^\\/]+)');
      var re = new RegExp('^' + path + '$');
      var captures = url.pathname.match(re);
      if (captures) {
        var args = [req, res].concat(captures.slice(1));
        fn.apply(null, args);
        return;
      }
    }
    next();
  }
};
//module.exports = route_simple;

var connect = require('connect');
var router = route_simple;

console.log(router);

var routes = {
	GET: {
		'/users': function(req, res) {
			res.end('user1, user2, user3');
		},
		'/user/:id': function(req, res, id) {
			res.end('user ' + id);
		}
	},
	DELETE: {
		'/user/:id': function(req, res, id) {
			res.end('deleted user ' + id);
		}
	}
};

connect().use(router(routes))
		.listen(18080);