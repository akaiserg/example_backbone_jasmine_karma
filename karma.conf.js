
// Karma configuration
// Generated on Mon May 18 2015 13:35:51 GMT+0200 (CEST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [

      'bower_components/jquery/dist/jquery.min.js',
      'bower_components/underscore/underscore-min.js',
      'bower_components/backbone-amd/backbone.js',

      'src/js/ModelPerson.js',
      'src/js/CollectionPerson.js',
      'tests/spec/**js',

    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress','coverage','junit', 'jasmine-runner2'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],
    //browsers: ['Chrome'],

    plugins : ['karma-jasmine', 'karma-phantomjs-launcher','karma-coverage','karma-chrome-launcher','karma-junit-reporter','karma-jasmine-runner2-reporter' ],


    preprocessors : {
      'src/js/ModelPerson.js':['coverage']

    },
    coverageReport: {
      type:'text',
      dir: 'coverage'

    },

    junitReporter :{
      outputFile: 'test-resutls.xml',
      // suite: 'e2e'
  },


  jasmineRunner2Reporter: {
    jasmineCore: 'bower_components/jasmine-core/', // relative path (from the output file to jasmine lib)
    outputFile: 'jasmine-runner.html', // name of output file (default is jasmine-runner.html)
    includes: [ ], // additional files to include
    templatePath: 'runner-template.html' // use if you moved runner-template.html
  },



    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
