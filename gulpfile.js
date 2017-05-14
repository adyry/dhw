const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const theme_dir = 'wp-content/themes/dhw/'

gulp.task('serve', ['sass'], function() {
  browserSync.init({
    open: 'external',
    host: 'dhw.localhost:80',
  });
    gulp.watch(`${theme_dir}sass/**/*.scss`, ['sass']);
    gulp.watch(`${theme_dir}/**/*.*`).on('change', browserSync.reload);
});

gulp.task('sass', function() {
    return gulp.src(`${theme_dir}/sass/**/*.scss`)
      .pipe(sass().on('error', sass.logError))
      .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade:false
      }))
      .pipe(concat('style.css'))
      .pipe(gulp.dest(`${theme_dir}`))
      .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
