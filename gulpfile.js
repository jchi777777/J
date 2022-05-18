const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass')); // 載入 gulp-sass 套件
var htmlImport = require('gulp-html-imports');

gulp.task('sass', () => {
  return gulp
    .src('./sass/*.scss') // SCSS 主檔案路徑
    .pipe(sass().on('error', sass.logError)) // 使用 gulp-sass 進行編譯
    .pipe(gulp.dest('css')); // 編譯完成輸出路徑
});


gulp.task('html_imports', done => {
    gulp.src('./dev/*.html')
      .pipe(htmlImport('./dev/components/'))
      .pipe(gulp.dest('dist'))
      done();
});