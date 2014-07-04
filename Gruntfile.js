'use strict';
 
/**
 * Grunt Module
 */
module.exports = function(grunt) {
	
grunt.initConfig({

 	pkg: grunt.file.readJSON('package.json'),
 	sass: {
  		dist: {
  		  options: {
  		    style: 'compressed',
  		    compass: false
  		  },
  		  files: {
  		    'assets/css/main.min.css': 'assets/sass/main.scss'
  		  }
  		}
		},
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'assets/js/main.js',
        'assets/js/angular/*.js'
      ]
    },
    uglify: {
      dist: {
        files: {
          'assets/js/scripts.min.js': [
            'assets/js/plugins.js',
            'assets/js/main.js',
           // 'assets/js/angular/*.js' RH need to minify app.js?
          ]
        },
        options: {
          // JS source map: to enable, uncomment the lines below and update sourceMappingURL based on your install
          // sourceMap: 'assets/js/scripts.min.js.map',
          // sourceMappingURL: '/app/themes/roots/assets/js/scripts.min.js.map'
        }
      }
    },
    watch: {
      options: {
      livereload: true,
      },
      sass: {
        files: [
          'assets/sass/*.scss',
        ],
        tasks: ['sass']
      },
      js: {
        files: [
          'assets/js/plugins.js',
          'assets/js/main.js',
          'assets/js/angular/*.js'
        ],
        tasks: ['jshint', 'uglify']
      },
    },
    clean: {
      dist: [
        'assets/css/main.min.css',
        'assets/js/scripts.min.js'
      ]
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Register tasks
  grunt.registerTask('default', [
    'clean',
    'jshint',
    'sass',
    'uglify'
  ]);
  grunt.registerTask('dev', [
    'watch'
  ]);

};
