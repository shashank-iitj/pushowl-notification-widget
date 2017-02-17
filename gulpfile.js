/**
 * Created by shashank on 06/04/16.
 */
var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('default', function () {
    browserSync.init({
        server: './src/'
    });

    browserSync.stream();

    gulp.watch('./src/*.html').on('change', browserSync.reload);
    gulp.watch('./src/assets/css/**/*.css').on('change', browserSync.reload);
    gulp.watch('./src/assets/js/**/*.js').on('change', browserSync.reload);
});
