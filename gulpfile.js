// handles build of client code. (browserify, minify etc)
// does not handle app building (that's cordova's job)
// this allows using 

const gulp = require('gulp');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const gutil = require('gulp-util');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const path = require('path');

gulp.task('build', ()=>{
	gulp.start('browserify');
	gulp.start('copyStatic');
});

gulp.task('browserify', ()=>{
	var b = browserify({entries: "./src/main.js", debug: true});

	return b.bundle()
	.pipe(source('app.js'))
	.pipe(buffer())
	.pipe(sourcemaps.init({loadMaps: true}))
	// Add transformation tasks here
	.pipe(uglify())
	.on('error', gutil.log)
	.pipe(sourcemaps.write('./'))
	.pipe(gulp.dest("./client/"));
});

gulp.task('copyStatic', ()=>{
	gulp.src("./src/*.html")
	.pipe(gulp.dest("./client/"));

	gulp.src("./src/images/*")
	.pipe(gulp.dest("./client/images"));
});

gulp.task('default', ["build"]);