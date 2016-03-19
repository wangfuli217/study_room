var gulp = require('gulp'),
    // jshint = require('gulp-jshint'),
    sass = require('gulp-ruby-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    server = require('gulp-express');
    webserver = require('gulp-webserver');

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
    gulp.watch('public/js/**/*', ['js']);
    gulp.watch(['process/sass/**/*'], ['sass']);
});

gulp.task('server', function() {
    server.run(['./bin/www'], []);
    livereload.listen();
});

gulp.task('webserver', function() {
    gulp.src('bin/www')
        .pipe(webserver({
            livereload: true,
            open: true,
            port: 3000
        }));
});

gulp.task('default', ['watch', 'sass','server']);