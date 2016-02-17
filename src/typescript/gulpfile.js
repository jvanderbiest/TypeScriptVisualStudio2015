/// <binding AfterBuild='libs' Clean='clean' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp');
var rimraf = require('rimraf');

var paths = {
    npm: './node_modules/',
    lib: './wwwroot/lib/'
}

var libs = [
   paths.npm + 'es6-shim/es6-shim.min.js',
   paths.npm + 'systemjs/dist/system-polyfills.js',
   paths.npm + 'angular2/bundles/angular2-polyfills.js',
   paths.npm + 'systemjs/dist/system.src.js',
   paths.npm + 'rxjs/bundles/Rx.js',
   paths.npm + 'angular2/bundles/angular2.dev.js'
];

gulp.task('libs', function () {
    return gulp.src(libs).pipe(gulp.dest(paths.lib));
});

gulp.task('clean', function (callback) {
    rimraf(paths.lib, callback);
});