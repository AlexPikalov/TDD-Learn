//
module.exports = function (config) {
    config.set({
        autoWatch: true,

        basePath: '../..',

        browsers: [ 'Chrome' ],

        frameworks: [ 'mocha', 'chai' ],

        colors: true,

        exclude: [],

        files: [
            'vendor/bower_components/angular/angular.js',
            'vendor/bower_components/angular-mocks/angular-mocks.js',

            'app/**/*.js',
            'tests/unit/**/*.spec.js'
        ]
    });
};