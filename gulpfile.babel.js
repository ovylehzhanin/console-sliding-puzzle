import gulp from 'gulp';
import pug from 'gulp-pug';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import browserSync from 'browser-sync';

let sync = browserSync.create();

gulp.task('pug', () => {
  return gulp.src('./source/index.pug')
    .pipe(pug({
      pretty: true
    }))
    .pipe(gulp.dest('./dist'));
});

gulp.task('js-build', () => {
  return browserify('./source/javascript/main.js')
    .transform('babelify')
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./dist'));
});


gulp.task('static-server', [/* 'pug', */ 'js-build'], done => {
  sync.init({
    server: './dist'  
  });
  done();
});


gulp.task('reload', [/* 'pug', */ 'js-build'], done => {
  sync.reload();
  done();
});


gulp.task('watcher', ['static-server'], () => {
  gulp.watch([/* './source/**.*pug', */ './source/javascript/**.*js'], [/* 'pug', */ 'js-build', 'reload']);
});

/* gulp.task('default', ['js-build', 'pug', 'static-server', 'watcher']); */
gulp.task('default', ['js-build', 'static-server', 'watcher']);
