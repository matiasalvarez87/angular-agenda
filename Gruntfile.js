
module.exports = function (grunt) {

    // Load plugins
    grunt.loadNpmTasks('grunt-connect');

    // Project configuration.
    grunt.initConfig({
        
        connect: {
            uses_defaults: {}
        }

    });

    // Default task(s).
    grunt.registerTask('default', ['connect']);

};