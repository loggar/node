/*
GET     /albums           ->  index
POST    /albums           ->  create, return URI
GET     /albums/:id       ->  show
PUT     /albums/:id       ->  create or update
DELETE  /albums/:id       ->  destroy
*/

// GET     /albums    ->  index
app.get('/albums', function (req, res) {
	var index = map(albums, function (album) {
		return {
			href: '/albums/' + album.id,
			properties: {
				name: album.name,
				artist: album.artist
			}
		};
	});
	res.send(index);
});

/*
{
"chmzq50np0002gfixtr1qp64o": {
  "href": "/albums/chmzq50np0002gfixtr1qp64o",
  "properties": {
    "name": "Settle",
    "artist": "Disclosure"
  }
}
}*/

//POST    /albums    ->  create, return URI
app.post('/albums', function (req, res) {
	var id = cuid(),
		album = mixIn({}, req.body, {
			id: id
		});

	albums[id] = album;
	res.send(201, {
		href: '/albums/' + id
	});
});

//Send available options on OPTIONS requests
app.options('/albums', function (req, res) {
	res.send(['GET', 'POST', 'OPTIONS']);
});

//Deliver 405 errors if the request method isn't
//defined.
app.all('/albums', errorHandler.httpError(405));