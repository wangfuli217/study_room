var gulp = require('gulp'),
    // jshint = require('gulp-jshint'),
    sass = require('gulp-ruby-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    server = require('gulp-express');
    webserver = require('gulp-webserver');
    livereload = require('gulp-livereload');

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

// gulp.task('server', function() {
//     server.run(['app.js']);

//     livereload.listen();
// });

gulp.task('webserver', function() {
    gulp.src('./')
        .pipe(webserver({
            fallback: 'app.js',
            livereload: true,
            open: true,
            port: 5000
        }));
});

gulp.task('default', ['watch', 'sass','webserver']);
// gulp.task('default', ['watch', 'sass']);
