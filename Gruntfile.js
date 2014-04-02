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
          outputStyle: 'condensed'
        },
        files: {
          'css/app.css': 'scss/app.scss',
          'css/landing-page.css': 'scss/landing-page.scss',
          'css/editor.css': 'scss/editor.scss',
          'css/1-2-3-styles.css': 'scss/1-2-3-styles.scss'
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


// Image Compression //


imagemin: {
    png: {
      options: {
        optimizationLevel: 7
      },
      files: [
        {
          // Set to true to enable the following options…
          expand: true,
          // cwd is 'current working directory'
          cwd: 'img/',
          src: ['**/*.png'],
          // Could also match cwd line above. i.e. project-directory/img/
          dest: 'img/compressed/',
          ext: '.png'
        }
      ]
    },
    jpg: {
      options: {
        progressive: true
      },
      files: [
        {
          // Set to true to enable the following options…
          expand: true,
          // cwd is 'current working directory'
          cwd: 'img/',
          src: ['**/*.jpg'],
          // Could also match cwd. i.e. project-directory/img/
          dest: 'img/compressed/',
          ext: '.jpg'
        }
      ]
    }
  },


// Grunt Watch //
    watch: {
      grunt: { files: ['Gruntfile.js'] },

      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass', 'autoprefixer']
      }
    }
// End Grunt Watch //  
  
  });

// Define Grunt Tasks //

  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-reload');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('build', ['autoprefixer', 'sass']);
  grunt.registerTask('default', ['imagemin','build','watch']);

}