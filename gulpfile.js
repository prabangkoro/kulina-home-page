var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();


// compile sass
gulp.task('sass-compile', function () {
  return gulp.src('./src/sass/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

// watcher
gulp.task('watch', ['sass-compile', 'browserSync'], function () {
  gulp.watch('./src/sass/**/*.scss', ['sass-compile']);
  gulp.watch('./css/*.css', browserSync.reload);
  gulp.watch('./index.html', browserSync.reload);
  gulp.watch('./js/*.js', browserSync.reload);
});

// browserSync config
gulp.task('browserSync', function () {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
});