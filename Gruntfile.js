module.exports = function(grunt) {
  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 9000
        }
      }
    },

    imagemin: {
      dynamic: {
        files: [{
          optimizationLevel: 3,
          progressive: true,
          interlaced: true,
          expand: true,
          cwd: 'images/',
          src: ['*.{png,jpg,gif}'],
          dest: 'images/'
        }]
      }
    },

    postcss: {
      options: {
        map: true,
          processors: [
              require('postcss-import'),
              require('postcss-cssnext'),
              require('postcss-color-function'),
              require('postcss-custom-properties'),
              require('precss')
          ]
      },
      dist: {
        src: 'css/src/styles.css',
        dest: 'css/dest/styles.css'
      }
    },

    pug: {
      compile: {
        options: {
          pretty: true,
          data: {
            debug: false
          }
        },
        files: {
          'index.html': 'tmpl.pug',
        }
      }
    },

    watch: {
			css: {
		    files: [
          'css/src/*.css'
        ],
		    tasks: ['postcss', 'watch'],
		    options: {
            livereload: true,
		        spawn: false,
		        event: ['all'],
		    }
      },
      images: {
        files: [
          'images/*.{png,jpg,gif}'
        ],
		    tasks: ['imagemin', 'watch']
			},
      html: {
        files: [
          '**/*.pug'
        ],
		    tasks: ['pug', 'watch']
      }
    }
  });
  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', ['connect', 'pug', 'postcss', 'imagemin', 'watch']);
};
