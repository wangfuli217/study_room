var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var nodemon = require('gulp-nodemon');

gulp.task('sass', function () {
    return gulp.src('process/sass/*.scss')
    .pipe(sass({outputStyle: 'uncompressed', sourceComments: 'map'}, {errLogToConsole: true}))
    // .pipe(prefix("last 2 versions", "> 1%", "ie 8", "Android 2", "Firefox ESR"))
    .pipe(gulp.dest('public/css'))
    .pipe(reload({stream:true}));
});

gulp.task('browser-sync', ['nodemon'], function() {
    browserSync.init(null, {
        proxy: {
            host: "http://localhost",
            port: "5000"
        }
    });
});

gulp.task('default', ['sass', 'browser-sync'], function () {
    gulp.watch("process/sass/*.scss", ['sass']);
    gulp.watch(["public/js/**/*.js", "./*.html"], reload);
});
        
gulp.task('nodemon', function (cb) {
    var called = false;
    return nodemon({script: './bin/www'}).on('start', function () {
        if (!called) {
            called = true;
            cb();
        }
    });
});