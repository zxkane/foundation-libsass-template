module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss'],
        outputStyle: 'compressed'
      },
      dist: {
        files: {
          '../billiards/static/css/app.css': 'scss/fd.scss',
        }        
      },
      escort: {
    	  files: grunt.file.expandMapping([
    	                                   "scss/escort/*.scss",
    	                                   ], '', {
    		  expand: true,
    		  ext: '.css',
    		  rename: function(base, src) {
    			  grunt.log.write(base + " " + src);
    			  return src.replace('scss/', '../billiards/static/css/'); // or some variation
    		  }
    	  })      
        },
    },

    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['sass']);
  grunt.registerTask('default', ['build','watch']);
}