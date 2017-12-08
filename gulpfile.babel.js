import gulp from 'gulp';
import pug from 'gulp-pug';
import browserify from 'browserify';
import uglify from 'gulp-uglify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import browserSync from 'browser-sync';

let sync = browserSync.create();

gulp.task('pug', () => {
  return gulp.src('./source/index.pug')
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('js-build', () => {
  return browserify('./source/javascript/main.js')
    .transform('babelify')
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));
});

gulp.task('static-server', ['pug', 'js-build'], done => {
  sync.init({ server: './dist' });
  done();
});

gulp.task('reload', ['pug', 'js-build'], done => {
  sync.reload();
  done();
});

gulp.task('watcher', ['static-server'], () => {
  gulp.watch(['./source**.*pug', './source/javascript/**.*js'], ['pug', 'js-build', 'reload']);
});

gulp.task('default', ['js-build', 'pug', 'static-server', 'watcher']);
