const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
// const rename = require('gulp-rename');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

const gutil = require('gulp-util');
const webpack = require('webpack');

const webpackConfig = require('./webpack.config.js');

let devCompiler = webpack(webpackConfig);

gulp.task('webpack', function() {
    devCompiler.run(function(err, stats) {
        if(err) throw new gutil.PluginError('webpack:build-js', err);
        gutil.log('[webpack:build-js]', stats.toString({
            colors: true,
            progress:true
        }));
        gutil.log('Compile JS Success!');
    });
});

gulp.task('sass', function() {
    gulp.src('src/sass/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('build', [
    'webpack',
    'sass'
]);

gulp.task('default', [
    'build'
]);