const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const babel = require('gulp-babel');

const theme_dir = 'wp-content/themes/dhw/'

gulp.task('serve', () => {
  browserSync.init({
    open: 'external',
    host: 'dhw.localhost:80',
  });
    gulp.watch(`${theme_dir}sass/**/*.scss`, ['sass']);
    gulp.watch(`${theme_dir}/js/src/*.js`, ['babel']);
    gulp.watch(`${theme_dir}/**/*.*`).on('change', browserSync.reload);
});

gulp.task('sass', () => {
    return gulp.src(`${theme_dir}/sass/**/*.scss`)
      .pipe(sass().on('error', sass.logError))
      .pipe(sourcemaps.init())
      .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade:false
      }))
      .pipe(concat('style.css'))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest(`${theme_dir}`))
      .pipe(browserSync.stream());
});

gulp.task('babel', () => {
    return gulp.src(`${theme_dir}/js/src/*.js`)
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('scripts.js'))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(`${theme_dir}/js`));
});

gulp.task('default', ['babel', 'sass', 'serve']);
