// webserver 모듈은 public 아래의 contents 를 기준으로
// gulp 기동과 동시에 webserver 및 explorer 까지 띄워준다.
// gulp-livereload 모듈은 sublime-text 의 LiveReload 
// 플러그인을 Enable 시키는데 이 때 400 ms 의 delay 를 주면서
// chrome 의 live reload extension 과 통신하여 refresh 하게 한다.


var gulp = require('gulp'),
    // jshint = require('gulp-jshint'),
    sass = require('gulp-ruby-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    server = require('gulp-express');
    // webserver = require('gulp-webserver');
    // livereload = require('gulp-livereload');

// gulp.task('js', function() {
//   return gulp.src('public/js/myscript.js')
//     .pipe(jshint('./.jshintrc'))
//     .pipe(jshint.reporter('jshint-stylish'));
// });

gulp.task('sass', function () {
    return sass('process/sass/**/*.scss', {
      sourcemap: true,
      style: 'expanded'
    })
    .on('error', function (err) {
        console.error('Error!', err.message);
    })
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('public/css'));
});

gulp.task('watch', function() {
    // gulp.watch('public/js/**/*', ['js']);
    gulp.watch(['process/sass/**/*'], ['sass']);
});

gulp.task('server', function() {
    server.stop();
    server.run(['app.js']);

    // livereload.listen();
});

// gulp.task('webserver', function() {
//     gulp.src('public')
//         .pipe(webserver({
//             livereload: true,
//             open: true,
//             port: 5000
//         }));
// });

// gulp.task('default', ['watch', 'sass','webserver']);
gulp.task('default', ['watch', 'sass', 'server']);
