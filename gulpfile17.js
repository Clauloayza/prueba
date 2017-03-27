var gulp = require('gulp');

gulp.task('default', ['copiar_js', 'copiar_css'])


gulp.task('copiar_js', function(){
	//llevar la carpeta bootstrap a la carpeta js
	return gulp.src('./node_modules/bootstrap/dist/*')
	
	.pipe(gulp.dest('./'));
	
});

gulp.task('copiar_css', function(){
	//llevar la carpeta bootstrap a la carpeta js
	return gulp.src('./node_modules/bootstrap/dist/css/bootstrap.css')
	
	.pipe(gulp.dest('./css'));
	
});