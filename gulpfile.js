const gulp = require('gulp');
const { parallel, src, series, dest, watch } = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const terser = require('gulp-terser');

const jsPath = ('src/**/*.js');
const buildPath = ('./build');

function copyHtml(cb) {
  return src('src/**/*.html').pipe(gulp.dest(buildPath));
}

function jsTask() {
    return src(jsPath)
        .pipe(sourcemaps.init())
        .pipe(terser())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(buildPath));
}

function css(cb) {
  // body omitted
  return src('src/**/*.css').pipe(gulp.dest(buildPath));
}

exports.jsTask = jsTask;

exports.default = parallel(copyHtml, css, jsTask);