import gulp from 'gulp';
import pug from 'gulp-pug';
import browserify from 'browserify';
import source from 'vinyl-source-stream';

gulp.task('js-build', () => {
  return browserify('./source/javascript/main.js')
    .transform('babelify')
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist'))
});



gulp.task('default', ['js-build']);
