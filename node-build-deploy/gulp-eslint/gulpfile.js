/*!
 * gulp
 * $ npm install gulp-eslint --save-dev
 */

// Load plugins
var gulp = require('gulp'),
	eslint = require('gulp-eslint');

gulp.task('lint', function () {
	return gulp.src('lib/**').pipe(eslint({
		'rules': {
			'quotes': [1, 'single'],
			'semi': [1, 'always']
		}
	}))
		.pipe(eslint.format())
		// Brick on failure to be super strict
		.pipe(eslint.failOnError());
});