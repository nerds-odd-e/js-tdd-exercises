module.exports = function(grunt) {
  'use strict';

  // Project configuration.
  grunt.initConfig({
    jasmine : {
      src : 'js/**/*.js',
      options : {
        specs : 'spec/**/*.js'
      }
    },
    jshint: {
      all: [
        'Gruntfile.js',
        'js/**/*.js',
        'spec/**/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },
    watch: {
      scripts: {
        files: ['**/*.js'],
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
