var path = require('path');
var debug = require('debug'), logger = {log:debug(path.basename(__filename, '.js')+':log'), err:debug(path.basename(__filename, '.js')+':err')};
var express = require('express');
var multer = require('multer');

var router = express.Router();

var upload = multer({
	storage : multer.diskStorage({
		destination : function(req, file, cb) {
			cb(null, path.join(__dirname, '/upload_tmp'));
		},
		filename : function(req, file, cb) {
			cb(null, file.fieldname + '_' + Date.now());
		}
	})
});

/* GET users listing. */
router.get('/test/:name', function(req, res) {
	res.send('respond with a resource to ' + req.params.name);
});

router.get('/settings', function(req, res) {
	res.render('sample', {
		title : 'Title'
	});
});

router.post('/form', function(req, res) {
	res.redirect('/html/sample/form.html');
});

router.post('/ajax', function(req, res) {
	res.send('abcd');
});

router.post('/multipart', upload.single('file_data_from_form'), function(req, res, next) {
	res.redirect('/html/sample/multipart.html');
});

router.post('/multipart2', function(req, res, next) {
	var upload_single = upload.single('file_data_from_form');
	upload_single(req, res, function(err) {
		if(err) {
			next(err);
		}
		res.redirect('/html/sample/multipart2.html');
	});
});

router.get('/global', function (req, res, next) {
	logger.log('%O', require('../lib/config/app_path'));
	logger.log('%O', global);
	logger.log('%O', process);
	
	res.send('global variables and objects');
});

router.get('/error', function (req, res, next) {
	next(new Error('Fake Error Sample'));
});

module.exports = router;