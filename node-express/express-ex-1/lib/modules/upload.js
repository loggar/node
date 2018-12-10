var multer = require('multer');
var mime = require('mime');
var path = require('path');
var config_dir = require('../config/app_path');

module.exports = function(dir) {
	if(!dir) dir = path.join(config_dir.DIR_ROOT, 'upload_tmp');
	
	return multer({
		storage : multer.diskStorage({
			destination : function(req, file, cb) {
				cb(null, dir);
			},
			filename : function(req, file, cb) {
				cb(null, file.fieldname + '_' + Date.now() + '.' + mime.extension(file.mimetype));
			}
		})
	});
};