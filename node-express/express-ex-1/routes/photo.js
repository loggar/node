var path = require('path');
var debug = require('debug'), logger = {log:debug(path.basename(__filename, '.js')+':log'), err:debug(path.basename(__filename, '.js')+':err')};
var express = require('express');
var config_dir = require('../lib/config/app_path');
var upload = require('../lib/modules/upload')(path.join(config_dir.DIR_PUBLIC, '/images/photos'));
var Photo = require('../lib/models/Photo');

var router = express.Router();

router.get('/list_dump', function(req, res) {
	var photos = require('../lib/test/photo_dummy');
	logger.log(photos);
	res.render('photos/list', {
		title : 'Title',
		fileName : 'photo.js',
		photos : photos
	});
});

router.get('/list', function(req, res, next) {
	Photo.find({
		$query : {},
		$orderby : {
			_id : -1
		}
	}, function(err, photos) {
		if (err)
			return next(err);
		res.render('photos/list', {
			title : 'Photos',
			fileName : 'photo.js',
			photos : photos
		});
	});
});

router.get('/upload', function(req, res, next) {
	res.render('photos/upload', {
		title : 'Photo upload'
	});
});

router.post('/upload', function(req, res, next) {
	var upload_single = upload.single('photo[image]');
	upload_single(req, res, function(err) {
		if (err) {
			return next(err);
		}
		Photo.create({
			name : req.body.photo.name || 'unknown',
			path : req.file.filename,
			original : req.file.originalname
		}, function(err) {
			if (err) {
				// delete file
				return next(err);
			}
			res.redirect('/list');
		});
	});
});

router.get('/sendFile/:id', function(req, res, next) {
	Photo.findById(req.params.id, function(err, photo) {
		if(err) return next(err);
		res.sendfile(path.join(global.DIR_PUBLIC, dir_photo_upload, photo.path));
	});
});

router.get('/download/:id', function(req, res, next) {
	Photo.findById(req.params.id, function(err, photo) {
		if(err) return next(err);
		res.download(path.join(global.DIR_PUBLIC, dir_photo_upload, photo.path), photo.original || photo.path);
	});
});

module.exports = router;
