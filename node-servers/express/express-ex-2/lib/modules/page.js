module.exports = function(fn, perpage) {
	perpage = perpage || 10;
	return function(req, res, next) {
		var strPage = req.params.page || req.query.page || '1';
		var page = Math.max(parseInt(strPage, 10), 1) - 1;
		fn(function(err, total) {
			if (err)
				return next(err);
			req.page = res.locals.page = {
				number : page,
				perpage : perpage,
				from : page * perpage,
				to : page * perpage + perpage - 1,
				total : total,
				count : Math.ceil(total / perpage)
			};
			next();
		});
	}
};
