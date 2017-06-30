/*var gulp = require('gulp');
var sass = require('gulp-sass');
var csso = require('gulp-csso');
var browserSync = require('browser-sync');

gulp.task('css', function() {
    gulp.src('scss/main.scss')
        .pipe(sass())
        .pipe(csso())
        .pipe(gulp.dest('dist'))
});

gulp.task('watch', function(){
    gulp.watch('scss', ['css']);
})

gulp.task('bs', function () {
    browserSync.init({
       server: {
           baseDir: './'
       }
    });
})

gulp.task('default', [ 'watch', 'bs' ]);*/

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('css', function() {
  gulp.src('scss/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist'))
});

gulp.task('watch', function(){
  gulp.watch('scss/*.scss', ['css']);
})

gulp.task('default', ['css']);