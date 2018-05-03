var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');

// compile js
gulp.task('js', function () {
  gulp.src('./node_modules/bootstrap/dist/js/bootstrap.min.js')
    .pipe(gulp.dest('./js'));
  return gulp.src('./src/js/index.js')
    .pipe(gulp.dest('./js'));
});
gulp.task('js-min', function () {
  gulp.src('./node_modules/bootstrap/dist/js/bootstrap.min.js')
    .pipe(gulp.dest('./js'));
  return gulp.src('./src/js/index.js')
    .pipe(uglify())
    .pipe(gulp.dest('./js'));
});

// compile sass
gulp.task('sass', function () {
  return gulp.src('./src/sass/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
gulp.task('sass-min', function () {
  return gulp.src('./src/sass/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./css'));
});

// browserSync config
gulp.task('browserSync', function () {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
});

// watcher
gulp.task('watch', ['sass', 'js', 'browserSync'], function () {
  gulp.watch('./src/sass/**/*.scss', ['sass']);
  gulp.watch('./src/js/**/*.js', ['js']);
  gulp.watch('./css/*.css', browserSync.reload);
  gulp.watch('./index.html', browserSync.reload);
  gulp.watch('./js/*.js', browserSync.reload);
});

gulp.task('run-dev', ['sass', 'js'], function () {
  console.log('Building assets on dev environment...');
});

gulp.task('run-prd', ['sass-min', 'js-min'], function () {
  console.log('Building assets on prd environment...');
});