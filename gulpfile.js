var gulp = require('gulp');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
sass.compiler = require('node-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleanCss = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();
var modifyCssUrls = require('gulp-modify-css-urls');
var pxtorem = require('gulp-pxtorem');

var plumber = require('gulp-plumber');

var errorHandler = function (error) {
  console.error(error.message);
  this.emit('end');
};
var plumberOption = {
  errorHandler: errorHandler,
};

var BABEL_POLYFILL = './node_modules/@babel/polyfill/browser.js';
var autoprefixBrowsers = ['> 0%', 'last 4 versions'];

gulp.task('uglify', function (done) {
  done();
  return (
    gulp
      .src(['wwwroot/pc/resources/scripts/**/*.js', BABEL_POLYFILL]) //src 폴더 아래의 모든 js 파일을
      .pipe(plumber(plumberOption))
      .pipe(babel())
      //.pipe(concat('all.js'))
      //.pipe(uglify()) //minify 해서
      .pipe(gulp.dest('wwwroot/pc/resources/scripts/dist'))
  ); //dist 폴더에 저장
});

gulp.task('sassPC', function () {
  return gulp
    .src('wwwroot/pc/resources/scss/**/*.scss')
    .pipe(plumber(plumberOption))
    .pipe(
      sourcemaps.init({
        loadMaps: true,
      })
    )
    .pipe(
      sass({
        outputStyle: 'expanded', //[nested, compact, expanded, compressed]
        indentType: 'tab',
        indentWidth: 1,
      }).on('error', sass.logError)
    )
    .pipe(
      autoprefixer({
        browsers: autoprefixBrowsers,
        cascade: true,
      })
	)
    .pipe(sourcemaps.write('../maps'))
    .pipe(gulp.dest('wwwroot/pc/resources/styles'))
    .pipe(browserSync.reload({ stream: true }));
});

gulp.task('buildPC', function () {
  return gulp
    .src('wwwroot/pc/resources/scss/**/*.scss')
    .pipe(plumber(plumberOption))
    .pipe(
      sass({
        outputStyle: 'compressed', //[nested, compact, expanded, compressed]
      }).on('error', sass.logError)
    )
    .pipe(
      autoprefixer({
        browsers: autoprefixBrowsers,
        cascade: true,
      })
    )
    .pipe(gulp.dest('wwwroot/pc/resources/styles/dist'))
    .pipe(browserSync.reload({ stream: true }))
    .on('end', function () {
      console.log('-------- appned css --------');
    });
});

gulp.task('sassMO', function () {
  return (
    gulp
      .src('wwwroot/mo/resources/scss/**/*.scss')
      .pipe(plumber(plumberOption))
      .pipe(
        sourcemaps.init({
          loadMaps: true,
        })
      )
      .pipe(
        sass({
          outputStyle: 'expanded', //[nested, compact, expanded, compressed]
          indentType: 'tab',
          indentWidth: 1,
        }).on('error', sass.logError)
      )
      .pipe(
        autoprefixer({
          browsers: autoprefixBrowsers,
          cascade: true,
        })
      )
      /*
		.pipe(pxtorem({
			propList: ['*', '!'],
			rootValue: 16,
			replace: false,
			minPixelValue: 2,
			mediaQuery: true
		}))
		*/
      .pipe(sourcemaps.write('../maps'))
      .pipe(gulp.dest('wwwroot/mo/resources/styles'))
      .pipe(browserSync.reload({ stream: true }))
  );
});

gulp.task('buildMO', function () {
  return (
    gulp
      .src('wwwroot/mo/resources/scss/**/*.scss')
      .pipe(plumber(plumberOption))
      .pipe(
        sass({
          outputStyle: 'compressed', //[nested, compact, expanded, compressed]
        }).on('error', sass.logError)
      )
      .pipe(
        autoprefixer({
          browsers: autoprefixBrowsers,
          cascade: true,
        })
      )
      /*
		.pipe(pxtorem({
			propList: ['*', '!'],
			rootValue: 16,
			replace: false,
			minPixelValue: 2,
			mediaQuery: true
		}))
		.pipe(modifyCssUrls({
			modify: function (url, filePath) {
				return url.replace('../images/', '../../images/app/');
			},
		}))
		*/
      .pipe(gulp.dest('wwwroot/mo/resources/styles/dist'))
      .pipe(browserSync.reload({ stream: true }))
      .on('end', function () {
        console.log('-------- appned css --------');
      })
  );
});

gulp.task('watch', function () {
  browserSync.init({
    //logLevel: "debug",
    port: 3333,
    open: false,
    directory: true,
    server: './wwwroot/',
    browser: 'google chrome',
  });

  //gulp.watch('wwwroot/pc/resources/scripts/**/*.js',  gulp.series('uglify'));
  gulp.watch(
    'wwwroot/pc/resources/scss/**/*.scss',
    gulp.series('sassPC', 'buildPC')
  );
  gulp.watch(
    'wwwroot/mo/resources/scss/**/*.scss',
    gulp.series('sassMO', 'buildMO')
  );
  gulp.watch('wwwroot/**/*.html').on('change', browserSync.reload);
});

gulp.task(
  'default',
  gulp.series('sassPC', 'buildPC', 'sassMO', 'buildMO', 'watch')
);
