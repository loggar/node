var authorize = function authorize(options) {
  return function auth(req, res, next) {
    if (options.requiresAuth &&
      !(req.session && req.session.user)) {
      return res.send(403);
    }
    next();
  };
};

// app.put('/posts/:id', authorize(), putPost);