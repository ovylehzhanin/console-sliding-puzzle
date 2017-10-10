import gulp from 'gulp';
import pug from 'gulp-pug';

gulp.task('pug', () => {
  return gulp.src('./source/index.pug')
    .pipe(pug( {pretty: true} ))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['pug']);
