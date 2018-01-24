var gulp = require('gulp')
var concat = require('gulp-concat')
var uglify = require('gulp-uglify')

gulp.task('compress', function(){
  return gulp.src([
    "assets/js/jquery-1.11.1.min.js",
  	"assets/bootstrap/js/bootstrap.min.js",
  	"assets/js/jquery.parallax-1.1.3.js",
  	"assets/js/imagesloaded.pkgd.js",
  	"assets/js/jquery.sticky.js",
  	"assets/js/smoothscroll.js",
  	"assets/js/wow.min.js",
    "assets/js/jquery.easypiechart.js",
    "assets/js/waypoints.min.js",
    "assets/js/jquery.cbpQTRotator.js",
  	"assets/js/custom.js",
  ])
  .pipe(concat('bundle.js'))
  .pipe(uglify({mangle: false}))
  .pipe(gulp.dest('assets/js'));
})
