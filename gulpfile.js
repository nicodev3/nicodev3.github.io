var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    plumber = require('gulp-plumber')
    gutil = require('gulp-util'),
    notify = require('gulp-notify'),
    livereload = require('gulp-livereload');

var onError = function (err) {
    gutil.beep();
    console.log(err);
};
var sassDir = '_sass/';
var targetCSSDir = 'css/';


gulp.task('styles', function() {
    return gulp.src(sassDir + '/main.scss')
        .pipe(plumber({
            errorHandler: notify.onError("Error: <%= error.message %>")
        }))
        //.pipe(notify('SASS compilé !'))
        .pipe(sass({
            style: 'expanded',
            lineNumbers: true,
            require: ['susy', 'breakpoint']
        }))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
        .pipe(gulp.dest(targetCSSDir));
});

gulp.task('watch', function() {
    gulp.watch(sassDir + '**/*.scss', ['styles']);
});