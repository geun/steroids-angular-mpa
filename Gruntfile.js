/*
 * Default Gruntfile for AppGyver Steroids
 * http://www.appgyver.com
 *
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        
        // Project settings
        appgyver: {
            // configurable paths
            app: require('./bower.json').appPath || 'app',
            dist: 'dist'
        },
        watch:{
            haml:{
                files: ['<%= appgyver.app %>/haml/{,*/}*.haml'],
                tasks: ['haml:dist']
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js'
            ]
        },
        haml: {
            options: {
                language: 'ruby'
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '<%= appgyver.app %>/haml',
//                    src: '{,*/}*.haml',
                    src: '**/*.haml',
                    dest: '<%= appgyver.app %>/views',
                    ext: '.html'
                }]
            }
        }
    });
    //  grunt.loadNpmTasks("grunt-steroids");

    grunt.registerTask("default", ["haml:dist","steroids-make", "steroids-compile-sass"]);

};
