var gulp = require('gulp');
var clean = require('gulp-clean');


var source = require('vinyl-source-stream');
var browserify = require('browserify');
var browserify_opts = {
        debug: true
    };


gulp.task('build:js', function() {

	gulp.src('public/js/*', {read: false})
        .pipe(clean());

    browserify('./client/js/main.js')
        .bundle(browserify_opts)
        .pipe(source('main.js'))
        .pipe(gulp.dest('public/js'))
});