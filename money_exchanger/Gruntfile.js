module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    jasmine : {
      src : [
        'js/*.js'
      ],
      options : {
        specs : 'spec/**/*.js',
        vendor : [
          'bower_components/jquery/dist/jquery.js',
          'node_modules/jasmine-jquery/lib/jasmine-jquery.js'
        ]
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
        tasks: ['jshint', 'jasmine'],
        options: {
          spawn: false,
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('test', ['jshint', 'jasmine']);

  grunt.registerTask('default', ['test']);
};
