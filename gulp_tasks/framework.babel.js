'use strict';

import debug from 'gulp-debug';
import gulp from 'gulp';
import jscs from 'gulp-jscs';
import jshint from 'gulp-jshint';
import jsonlint from 'gulp-jsonlint';
import yamlvalidate from 'gulp-yaml-validate';
import reportError from './_report-error.babel.js';

import config from './_config.babel.js';

const sourceFiles = config.files.tasks;

gulp.task('framework', () => {
  gulp.src(sourceFiles)
    .pipe(debug({
      title: 'framework (tasks):'
    }))
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jscs({
      fix: false
    }))
    .on('error', reportError);

  gulp.src(config.files.configuration.json)
    .pipe(debug({
      title: 'framework (configuration:json):'
    }))
    .pipe(jsonlint())
    .pipe(jsonlint.reporter(reportError))
    .on('error', reportError);

  gulp.src(config.files.configuration.yaml)
    .pipe(debug({
      title: 'framework (configuration:yaml):'
    }))
    .pipe(yamlvalidate())
    .on('error', reportError);
});

gulp.task('framework:watch', function() {
  gulp.watch(sourceFiles, ['framework']);
});
