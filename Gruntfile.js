module.exports = function(grunt) {
  grunt.initConfig({
    imagemin: {
      dynamic: {
        files: [{
          optimizationLevel: 3,
          progressive: true,
          interlaced: true,
          expand: true,
          cwd: 'img/',
          src: ['*.{png,jpg,gif}'],
          dest: 'img/'
        }]
      }
    },

    postcss: {
      options: {
        map: true,
          processors: [
              require('autoprefixer')({browsers: ['last 6 version']}),
              require('postcss-custom-properties'),
              require('precss'),
              require('cssnext'),
              require('postcss-import')
          ]
      },
      dist: {
        src: 'css/work_version.css',
        dest: 'css/styles.css'
      }
    },

    watch: {
			css: {
		    files: [
          'css/*.css'
        ],
		    tasks: ['postcss', 'watch'],
		    options: {
            livereload: true,
		        spawn: false,
		        event: ['all'],
		    }
      },
      imgs: {
        files: [
          'img/*.css'
        ],
		    tasks: ['imagemin', 'watch'],
			}
    }
  });
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  grunt.registerTask('default', ['imagemin', 'postcss', 'watch']);
};
