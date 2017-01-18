'use strict';

// var path = require('path');

module.exports = {
  exec: 'node-inspector & node --debug',
  script: 'index.js',
  ext: 'js pug less',
  watch: [
    'index.js',
    'app/',
    'config/',
    'lib/',
    'public/js/application.js',
    'public/js/main.js',
    'public/css/styles.less'
  ],
  nodeArgs: ['--debug'],
  env: {'NODE_ENV': 'development'},
  ignore: ['./node_modules/**', './public/bower_components/**'],
  // tasks: function(changedFiles) {
  //   var tasks = [];

  //   return tasks;
  // }
};
