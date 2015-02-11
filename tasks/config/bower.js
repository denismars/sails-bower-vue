/**
 * Run bower tasks.
 *
 * ---------------------------------------------------------------
 *
 *  Task to pull out specific files from bower packages.
 *  If we don't do this, Sails will copy ALL the bower package files to the .tmp directory
 *
 * For usage docs see:
 *      https://github.com/yatskevich/grunt-bower-task
 *      http://www.fationablylate.com/using-bower-with-sails-js/
 */
module.exports = function(grunt) {

    grunt.config.set('bower', {
        install: {
            options: {
                targetDir: './assets/',
                install: true,
                cleanTargetDir: false,
                cleanBowerDir: false,
            }
        }
    });

    grunt.loadNpmTasks('grunt-bower-task');
};
