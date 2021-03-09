//GET     /albums/:id    ->  show
app.get('/albums/:id', function (req, res, next) {
	var id = req.params.id,
		body = albums[id],
		err;

	if (!body) {
		err = new Error('Album not found');
		err.status = 404;
		return next(err);
	}

	res.send(200, body);
});

//PUT     /albums/:id    ->  create or update
app.put('/albums/:id', function (req, res) {
	var album = mixIn({}, req.body),
		id = req.params.id,
		exists = albums[id];

	album.id = id;
	albums[id] = album;

	if (exists) {
		return res.send(204);
	}

	res.send(201, {
		href: '/albums/' + album.id
	});
});

//DELETE  /albums/:id    ->  destroy
app.delete('/albums/:id',
	function (req, res, next) {
		var id = req.params.id,
			body = albums[id],
			err;

		if (!body) {
			err = new Error('Album not found');
			err.status = 404;
			return next(err);
		}

		delete albums[id];

		res.send(204);
	});

// Send available options on OPTIONS requests
app.options('/albums', function (req, res) {
	res.send(['GET', 'PUT', 'DELETE', 'OPTIONS']);
});

// 405 Method Not Allowed
app.all('/albums/:id', errorHandler.httpError(405));
