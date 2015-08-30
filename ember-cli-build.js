/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app'),
    pickFiles = require('broccoli-static-compiler'),
    mergeTrees = require('broccoli-merge-trees');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    babel: {
      includePolyfill: true
    }
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.
  app.import('bower_components/aws-sdk/dist/aws-sdk.min.js');
  app.import('bower_components/cookies-js/dist/cookies.min.js');
  app.import('bower_components/moment/min/moment.min.js');
  app.import('bower_components/moment-timezone/builds/moment-timezone-with-data-2010-2020.min.js');
  app.import('bower_components/pikaday/pikaday.js');
  app.import('bower_components/pikaday/css/pikaday.css');

  return app.toTree();
};
