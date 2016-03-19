var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
// var webserver = require('gulp-webserver');
var server = require('gulp-express');

var imgpath = 'public/img';
var jspath = 'public/js';
var csspath = 'public/css';
var ejspath = '../views';

var files = {
    js_files: jspath + '/*.js',
    scss_files: csspath + '/*.scss',
    ejs_files: ejspath + '/*.ejs'
}

gulp.task('compile-sass', function() {
    return gulp.src(files.scss_files)
           .pipe(sass())
           .pipe(gulp.dest(csspath));
});

gulp.task('watch', function() {
    livereload.listen();
    gulp.watch(files.scss_files, ['compile-sass']);
    gulp.watch('public').on('change', livereload.changed);
});

// gulp.task('webserver', function() {
    // gulp.src('public')
    //     .pipe(webserver({
    //         livereload: true,
    //         open: true,
    //         port: 3000
    //     }));
// });

// gulp.task('server', function() {
//     server.run(['./bin/www'], []);
//     livereload.listen();    
// });

gulp.task('default', ['compile-sass', 'watch'], function() {
});

// gulp.task('default', ['compile-sass', 'watch', 'server'], function() {
// });