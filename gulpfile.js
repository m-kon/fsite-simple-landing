const gulp = require('gulp');
const sass = require('gulp-sass');
const exec = require('child_process').exec;

gulp.task('sass', function() {
    gulp.src('sass/*.sass')
        .pipe(sass())
        .pipe(gulp.dest('css/'));
});

gulp.task('watch', ['sass'], function() {
    gulp.watch('sass/*.sass', ['sass']);
});

gulp.task('default', ['watch'], function() {
  exec('live-server');
});