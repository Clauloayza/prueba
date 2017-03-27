var gulp =  require('gulp');
var cssc = require('gulp-css-condense');

gulp.task('default', function(){
	return gulp.src('./node_modules/bootstrap/dist/css/bootstrap.css') 
	.pipe(cssc()) 
		.pipe(gulp.dest('./css'));
});

// origen/ minifica/ donde se direcciona