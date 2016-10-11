module.exports = function(grunt) {

    grunt.initConfig  ({
        connect:{
            server: {
                options: {port:9000}
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.registerTask('default', ['connect:server:keepalive']); 
};