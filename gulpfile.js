var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
var notify = require('gulp-notify');
var gutil = require('gulp-util');
var beep = require('beepbeep');
var plumber = require('gulp-plumber');
var cssnano = require('gulp-cssnano');
var cp = require('child_process');

var messages = {
    jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

// custom error handler
function customPlumber(errTitle) {
    return plumber({
        errorHandler: notify.onError({
            title: errTitle || "Error running Gulp",
            message: ' ---> <%= error.message %>',
            sound: 'Glass'
        })
    });
}

/**
 * Compile files from _scss into both _site/css (for live injecting) and site (for future jekyll builds)
 */
gulp.task('sass', function() {
    return gulp.src('./_scss/*.scss')
        .pipe(customPlumber('Error running Sass'))
        .pipe(sass({
            includePaths: ['scss/**/index.scss', 'bower_components/susy/sass'],
            onError: browserSync.notify
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(cssnano(({discardComments: {removeAll: true}})))
        .pipe(gulp.dest('_site/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
        .pipe(gulp.dest('./css')) // sinon jekyll build fait disparaitre !
        .pipe(notify({
            message: 'Sass compilé'
        }));
});

/**
 * Js task
 */
gulp.task('js', function() {
    return gulp.src('./_js/*')
        .pipe(uglify().on('error', gutil.log))
        .pipe(gulp.dest('_site/js'))
        .pipe(gulp.dest('./js')) // sinon jekyll build fait disparaitre !
        .pipe(notify({
            message: 'Scripts minifiés'
        }));
});

/**
 * Build the Jekyll Site
 */
gulp.task('jekyll-build', function(done) {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn('jekyll', ['build'], {
            stdio: 'inherit'
        })
        .on('close', done);
});

/**
 * Rebuild Jekyll & do page reload
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function() {
    browserSync.reload();
});

/**
 * Wait for jekyll-build, then launch the Server
 */
gulp.task('browser-sync', ['jekyll-build'], function() {
    browserSync({
        server: {
            baseDir: '_site'
        },
        host: 'localhost'
    });
});

/**
 * Watch scss files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
gulp.task('watch', function() {
    gulp.watch('_scss/**/*.scss', ['sass']);
    gulp.watch('_js/**/*.js', ['js']);
    gulp.watch(['index.html', 'modeles-de-sites/index.html', '_layouts/*.html', '_posts/*', '_includes/*.html', 'tutoriels/*.html', 'portfolio/**/*.html', 'developpeur-web/*.html', 'tarif-site-internet/*.html'], ['jekyll-rebuild']);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the jekyll site, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);