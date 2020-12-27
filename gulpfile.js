const gulp = require('gulp');
const { parallel, src, series, dest, watch } = require('gulp');

function copyHtml(cb) {
  return src('src/**/*.html').pipe(gulp.dest('public'));
}

function css(cb) {
  // body omitted
  return src('src/**/*.css').pipe(gulp.dest('public'));
}

exports.default = parallel(copyHtml, css);