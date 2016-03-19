var gulp = require('gulp'),
    server = require('gulp-express'),
    compass = require('gulp-compass'),
    path = require('path'),
    clean = require('gulp-clean'),
    jshint = require('gulp-jshint'),
    livereload = require('gulp-livereload');

gulp.task('server', function () {
    // Start the server at the beginning of the task 
    server.run(['./bin/www'], []);

    livereload.listen();

    // Restart the server when file changes 
    gulp.watch(['./views/*.ejs'], function(event){
      console.log('ejs changed - do livereload');
      livereload.reload();
    });

    gulp.watch(['scss/**/*.scss'], ['sass']);

    gulp.watch(['./public/css/*.css'], function(event){
        console.log('css changed - do livereload');
        livereload.reload();
    });

    gulp.watch(['./public/js/**/*.js'], ['jshint']);
    gulp.watch(['./public/img/**/*'], function(event){
        console.log('image changed - do livereload');
        livereload.reload();
    });

    gulp.watch(['./app.js', './routes/**/*.js'], function(event){
      server.run(['./bin/www'], []);
    });
});

gulp.task('sass', function() {
  return gulp.src('./public/css/*.scss')
    .pipe(compass({
      config_file: path.join(process.cwd(), 'config.rb'),
      project: path.join(process.cwd(), '/'),
      css: 'public/css',
      sass: 'scss',
      import_path: './',
      style: 'nested' //nested, expanded, compact, or compressed.
    }))
    .on('end', function() {
      console.log('compass compiled');
    });
});


gulp.task('default', ['server'], function() {

});