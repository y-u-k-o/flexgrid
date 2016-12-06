module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      development: {
        options: {
          paths: ['assets/css']
        },
        files: {
          'dist/css/flexgrid.css': 'dist/less/flexgrid.less'
        }
      }
    },
    cssmin: {
      minify: {
        files: {
          'dist/css/flexgrid.min.css': 'dist/css/flexgrid.css',
          'example/css/flexgrid.min.css': 'dist/css/flexgrid.css'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Default task.
  grunt.registerTask('default', [
    'less:development',
    'cssmin:minify'
  ]);
};