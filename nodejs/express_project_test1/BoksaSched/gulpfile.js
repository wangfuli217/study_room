// webserver 모듈은 public 아래의 contents 를 기준으로
// gulp 기동과 동시에 webserver 및 explorer 까지 띄워준다.
// gulp-livereload 모듈은 sublime-text 의 LiveReload 
// 플러그인을 Enable 시키는데 이 때 sass compile 시
// chrome 의 live reload extension 과 통신하여 refresh 하게 한다.


var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    server = require('gulp-express');

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
    gulp.watch(['process/sass/**/*'], ['sass']);
    gulp.watch(['routes/**/*'], ['server','sass']);
    gulp.watch(['views/**/*'], ['server','sass']);
    gulp.watch(['public/js/*'], ['server','sass']);
});

gulp.task('server', function() {
    server.stop();
    server.run(['./index.js']);
});

gulp.task('default', ['watch', 'sass', 'server']);
