module.exports = function(grunt) {
  grunt.initConfig({
  
    pkg: grunt.file.readJSON('package.json'),

// SASS //
    sass: {
      options: {
        includePaths: ['bower_components/foundation/scss']
      },
      dist: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          'css/app.css': 'scss/app.scss'
        }        
      }
    },
//End SASS //

// Autoprefixer //

autoprefixer: {
      development: {
        browsers: ['last 2 version', 'ie 9'],
        expand: true,
        flatten: true,
        src: 'css/*.css',
        dest: 'css/'
      }
    },

//End Autoprefixer //


// Grunt Watch //
    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      }
    }
// End Grunt Watch //  
  
  });

// Define Grunt Tasks //

  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-reload');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['sass', 'autoprefixer']);
  grunt.registerTask('default', ['build','watch']);

}