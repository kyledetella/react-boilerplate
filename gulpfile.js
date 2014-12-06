'use strict';

var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var webserver = require('gulp-webserver');

var config = {
  server: { port: 3080 },
  src: {
    js: {
      all: './src/**/*.js',
      main: './src/main.js',
      dist: './dist',
      output: 'app.built.js'
    }
  }
};

gulp.task('js', function () {
  browserify(config.src.js.main)
    .transform(reactify)
    .bundle()
    .pipe(source(config.src.js.output))
    .pipe(gulp.dest(config.src.js.dist));
});

gulp.task('watch', function () {
  gulp.watch(config.src.js.all, ['js']);
});

gulp.task('webserver', function() {
  gulp.src('.')
    .pipe(webserver({ port: config.server.port }));
});

gulp.task('default', ['watch', 'webserver', 'js']);
