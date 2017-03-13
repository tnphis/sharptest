var gulp = require('gulp')
var uglify = require('gulp-uglify')
var stylus = require('gulp-stylus')
var gulpUtil = require('gulp-util')
var amdOptimize = require('amd-optimize')
var concat = require('gulp-concat')
var ngAnnotate = require('gulp-ng-annotate')

gulp.task('buildlibs', function() {
	//lots of manual configs here but every package has its own standards...
	//only leave css and fonts for the minified build
	gulp.src([
		'bower_components/**/*.min.js',
		'bower_components/**/*-min.js',
		'bower_components/**/*.min.css',
		'bower_components/**/*.eot',
		'bower_components/**/*.ttf',
		'bower_components/**/*.svg',
		'bower_components/**/*.woff*',
	], {base: 'bower_components'}).pipe(gulp.dest('build/app/lib'))

	gulp.src('bower_components/requirejs/require.js')
		.pipe(uglify())
		.pipe(gulp.dest('build/app/lib'))
})

gulp.task('copystatics', function() {
	gulp.src(['src/index.html', 'src/img/**', 'src/css/fonts/**'], {base: 'src'})
		.pipe(gulp.dest('build/app'))
})

gulp.task('buildcss', function() {
	gulp.src(['src/css/*.styl'], {base: 'src'})
		.pipe(stylus({compress: true}))
		.pipe(gulp.dest('build/app'))
})

gulp.task('buildjs', function() {
	//uncomment annotation, minification and concatenation for the minified build
	gulp.src(['src/js/**/*.js'], {base: 'src'})
		/*.pipe(ngAnnotate({add: true}))
		.pipe(amdOptimize('main', {
			baseUrl: 'src/js',
			configFile: 'src/js/require.config.js',
			findNestedDependencies: true,
			//dubious organization but it will suffice for now
			paths: {
				'jquery': '../../bower_components/jquery/dist/jquery.min',
				'angular': '../../bower_components/angular/angular.min',
				'angular-ui-router': '../../bower_components/angular-ui-router/release/angular-ui-router.min',
				'bootstrap': '../../bower_components/bootstrap/dist/js/bootstrap.min',
				'underscore': '../../bower_components/underscore/underscore-min'
			}
		}))
		.pipe(concat('js/main.js'))
		.pipe(uglify({mangle: {except: ['Global']}}).on('error', gulpUtil.log))*/
		.pipe(gulp.dest('build/app'))

	gulp.src(['src/js/**/*.html'], {base: 'src'})
		.pipe(gulp.dest('build/app'))
})

gulp.task('default', function() {
	gulp.watch('src/css/**', ['buildcss'])
	gulp.watch('src/js/**', ['buildjs'])
	gulp.watch(['src/index.html', 'src/img/**'], ['copystatics'])
});
