module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    jasmine : {
      src : [
        'js/libs/vue.js',
        'js/keys.js',
        'js/store.js',
        'js/main.js'
      ],
      options : {
        specs : 'spec/**/*.js',
        vendor: [
          'node_modules/jquery/dist/jquery.js',
          'node_modules/jasmine-jquery/lib/jasmine-jquery.js'
        ],
      }
    },
    jshint: {
      all: [
        'Gruntfile.js',
        'js/*.js',
        'spec/**/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    watch: {
      scripts: {
        files: ['js/**/*.js','spec/**/*.js'],
        tasks: ['jasmine'],
        options: {
          spawn: false,
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('test', ['jshint', 'jasmine']);

  grunt.registerTask('default', ['test']);
};
