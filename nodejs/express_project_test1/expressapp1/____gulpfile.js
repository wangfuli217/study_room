var gulp = require('gulp');
var server = require('gulp-express');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
// etc.

gulp.task('server', function () {
    server.run({ 
        file: './bin/www', 
        port: 8000 
    });

    gulp.watch('process/sass/*.scss', ['build-css']);
    gulp.watch(['app.js', 'routes/*.js'], function (e) {
        server.run({ 
            file: './bin/www',
            port: 8000 
        });
        livereload.changed(e.path);
    });
});

gulp.task('build-css', function () {
    return gulp.src('process/sass/*.scss')
        .pipe(sass({ compress: false, 'include css': true }))
        // other tasks
        .pipe(gulp.dest('public/css/'))
        .pipe(livereload());
});

gulp.task('default', ['build-css', 'server']);