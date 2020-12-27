const gulp = require('gulp');
const { parallel, src, series, dest, watch } = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const terser = require('gulp-terser');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');

const buildPath = ('./build');
const sourcePath = ('./public');

function copyHtml() {
  return src(sourcePath + '/**/*.html').pipe(gulp.dest(buildPath));
}

function copyCss() {
    return src(sourcePath + '/**/*.css').pipe(gulp.dest(buildPath));
  }

  function copyImages() {
    return src(sourcePath + '/**/*.*').pipe(gulp.dest(buildPath));
  }

function jsTask() {
    return src(sourcePath + '/**/*.js') 
        .pipe(sourcemaps.init())
        .pipe(terser())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(buildPath));
}

function cssTask() {
  return src(sourcePath + '/**/*.css')
    .pipe(sourcemaps.init())
    .pipe(concat('css/style.css'))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./build'));
}

function watchTask() {
    watch([sourcePath], {interval: 1000}, parallel(cssTask, jsTask));
}

exports.jsTask = jsTask;
exports.cssTask = cssTask;
exports.copyHtml = copyHtml;
exports.copyImages = copyImages;
exports.build = parallel(copyHtml, copyCss, cssTask, jsTask, cssTask);
exports.default = series(parallel(copyHtml, copyCss, copyImages, jsTask, cssTask), watchTask);