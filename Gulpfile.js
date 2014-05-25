var gulp = require('gulp');
var watch = require('gulp-watch');
var chalk = require('chalk');

var dir = {
	src: {
		js: './client/js/',
		less: './client/less/'
	},
	compiled: {
		js: './public/js/',
		css: './public/css/'
	}
}


gulp.task('default', ['build:js', 'build:css'], function () {

});



// https://github.com/gulpjs/gulp/blob/master/docs/recipes/fast-browserify-builds-with-watchify.md
gulp.task('build:js', ['clean:js'], function() {

	var source = require('vinyl-source-stream');
	var browserify = require('browserify');
	var watchify = require('watchify');
	var browserify_opts = {
		    debug: true
		};

	var bundler = watchify({
		entries: dir.src.js,
		debug: true
	});

  	

	function rebundle () {
		console.log(  chalk.blue('Watchify: rebuilding.')  );
		gulp.start('build:tpl');

		
		return bundler.bundle()
		  .pipe(source('main.js'))
		  .pipe(gulp.dest(dir.compiled.js));
	}

	bundler.on('update', rebundle);

	return rebundle()
});




var templateCache = require('gulp-angular-templatecache');
var through = require('through2');
var path = require('path');

gulp.task('build:tpl', function () {

	console.log(  chalk.blue('Caching templates')  );
    gulp.src('./**/*tpl.html')
   		//This is to facilitate referencing the templates
		.pipe(through.obj(function (file, enc, callback) {

			file.base = path.join(file.base, '/client/js/');
			//console.log(file.base, file.cwd, file.path)

			this.push(file)
			callback()
		}))
        .pipe(templateCache({standalone: true}))
        .pipe(gulp.dest(dir.src.js));
});


gulp.task("build:css", ['clean:css'], function () {

	var less = require('gulp-less');


    gulp.src(dir.src.less + 'main.less')
    	.pipe(watch())
        .pipe(less({
            compress:  true,
            sourceMap: true
        }))
        .pipe(gulp.dest(dir.compiled.css));
});



var clean = require('gulp-clean');
function clean_template(glob, callback) {

    glob = Array.isArray(glob) ?  glob : [glob];
    glob.push('!**/.gitignore');
    glob.push('!**/.gitkeep');

    gulp.src(glob, {read:false}).pipe(clean());
    callback();
}

gulp.task('clean:js', function (callback) {
    clean_template(dir.compiled.js + '*', callback);
});

gulp.task("clean:css", function (callback) {
    clean_template(dir.compiled.css + '*', callback);
});


