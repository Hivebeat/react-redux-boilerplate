//Import this in the gulpfile
(function() {
  var gulp = require('gulp'),
    nodemon = require('gulp-nodemon'),
    plumber = require('gulp-plumber'),
    livereload = require('gulp-livereload'),
    sass = require('gulp-ruby-sass'),
    imagemin = require('gulp-imagemin'),
    uglify = require('gulp-uglify'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    babelify = require("babelify"),

    sourceFolder = './path/to/app',
    sourceFile = '../path/to/app/app.js',
    destFolder = './public/app',
    destFileName = 'app.js';

  var bundler = browserify({
    entries: [sourceFile],
    debug: true,
    insertGlobals: true,
    cache: {},
    packageCache: {},
    fullPaths: true
  });

  function rebundle() {
    return bundler
      .transform(babelify.configure({
        stage: 0
      }))
      .bundle()
      .on('error', function(err) {
        console.error(err);
      })
      .pipe(source(destFileName))
      .pipe(gulp.dest(destFolder));
  }
  bundler.on('update', rebundle);

  gulp.task('app-sass', function() {
    return sass(sourceFolder + '/css/')
      .pipe(gulp.dest('./public/app/css/'));
  });

  var appBuild = function () {
    rebundle();
    return sass(sourceFolder + '/css/')
      .pipe(gulp.dest('./public/app/css/'));
  };

  gulp.task('app-scripts', rebundle);

  gulp.task('app-build', ['app-scripts', 'app-sass']);

  return appBuild;
})();
