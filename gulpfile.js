const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('autoprefixer');
const exec = require('child_process').exec;

gulp.task('sass', function() {
    gulp.src('sass/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('css/'));
});

gulp.task('autoprefixer', function () {
    gulp.src('css/*.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([ autoprefixer() ]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', ['sass', 'autoprefixer'], function() {
    gulp.watch('sass/*.sass', ['sass']);
});

gulp.task('default', ['watch'], function() {
  exec('live-server');
});