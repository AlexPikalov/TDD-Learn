module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        shell: {
            options: {},
            'karma-unit-all': {
                command: 'node node_modules/karma/bin/karma start ./tests/unit/karma.conf.js'
            }
        }
    });

    grunt.registerTask('test', ['shell:karma-unit-all']);
};