var gulp = require('gulp');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var rimraf = require('rimraf');
var requireDir = require('require-dir');
var bs = require('browser-sync').create(); // create a browser sync instance.
var bust = require('gulp-buster');

switch(gutil.env.env){

  case 'dev':
    console.info("ENV DEV.....");
    requireDir('./gulp-env/dev');
    gulp.task('default', ["copyAll"]);
  break;
  case 'prod':
    requireDir('./gulp-env/prod');
    gulp.task('default', ["copyAllProd"]);
    console.info("ENV PRO.....");
  break;
  default:
    console.info("ENV UNDEFINED.....");
  break;

}

gulp.task('browser-sync', function() {
bs.init({
    server: {
        baseDir: "./"
    }
});
});

gulp.task('watch', ['browser-sync'], function () {

    gulp.watch("src/**").on('change', function(e){
      console.info(e.path);
      bs.reload();

    });
});
