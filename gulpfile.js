var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');
var less = require('gulp-less');
var cleancss = require('gulp-clean-css');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var htmlreplace = require('gulp-html-replace');



/*html的处理*/
gulp.task('html', () => {
  gulp.src(['src/**/*.html', './index.html'])
  .pipe(htmlreplace({
    // styles:gulp.src('src/html/common/css.html'),
    // aside:gulp.src('src/html/common/aside.html'),
    // header:gulp.src('src/html/common/header.html'),
    // courseaside:gulp.src('src/html/common/course/aside.html'),
    // courseheader:gulp.src('src/html/common/course/header.html')
  }))
    .pipe(htmlmin({
      collapseWhitespace: true,
      minifyJS: true,
      minifyCSS: true,
      removeComments: true
    }))
    .pipe(gulp.dest('dist'))
})


/*less的处理*/
gulp.task('less', () => {
  gulp.src(['src/less/**/*.less','src/less/index.less'])
    .pipe(less())
    .pipe(cleancss())
    .pipe(gulp.dest('dist/css'))
})


/*第三方js的处理*/
var otherjs = [
  'node_modules/jquery/dist/jquery.min.js',
  'node_modules/bootstrap/dist/js/bootstrap.min.js',
  'node_modules/art-template/lib/template-web.js',
  'node_modules/jquery-form/dist/jquery.form.min.js'
  // 'node_modules/jquery.cookie/jquery.cookie.js',
  // 'node_modules/nprogress/nprogress.js',
  // 'node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.js',
  // 'node_modules/bootstrap-datepicker/dist/locales/bootstrap-datepicker.zh-CN.min.js',
  // 'lib/Jcrop/js/Jcrop.js',
  // 'lib/jquery-region/jquery.region.js',
  // 'lib/uploadify/jquery.uploadify.min.js'
]
gulp.task('otherjs', () => {
  gulp.src(otherjs)
    .pipe(concat('lib.js'))
    .pipe(gulp.dest('dist/js'))
})


/*myself的js*/
var jsModules = [
  // 首页
  'src/js/index.js',
  'src/js/ran/getmoneyctrl.js',
  'src/js/ran/getproduct.js',

  'src/js/rong/getbrand.js',
  'src/js/rong/getgs.js',

  'src/js/xiao/getcoupon.js',
  'src/js/xiao/getcouponproduct.js',
  'src/js/xiao/getsitenav.js',

  'src/js/yu/getbaicaijiaproduct.js',
  'src/js/yu/getinlanddiscount.js',

  'src/js/liu/getproduct.js',
  'src/js/liu/getproductcom.js'
];
gulp.task('js', () => {
  jsModules.forEach(function (jspath) {
    var patharr = jspath.split('/');
    var jsname = patharr.pop();
    patharr.shift();
    browserify(jspath, { debug: true }).bundle()
      .pipe(source(jsname))
      .pipe(buffer())
      .pipe(gulp.dest('dist/' + patharr.join('/')))
  })
})

gulp.task('build', () => {
  gulp.run(['html', 'less', 'otherjs', 'js'])
})
gulp.task('default', () => {
  gulp.run('build')
  gulp.watch(['src/html/**/*.html', 'index.html'], function () {
    gulp.run('html');
  });
  gulp.watch(['src/less/**/*.less','src/less/index.less'], function () {
    gulp.run('less');
  });
  gulp.watch(['src/js/**/*.js','src/js/index.js'], function () {
    gulp.run('js');
  });
})