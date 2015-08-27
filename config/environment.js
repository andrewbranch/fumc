/* jshint node: true */

module.exports = function (environment) {
  var ENV = {
    modulePrefix: 'mission-control',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    proxy: '',
    host: 'https://api.fumcpensacola.com',
    namespace: 'v3',

    contentSecurityPolicy: {
      'default-src': "'none'",
      'frame-src': "https://api-cdn.amazon.com",
      'script-src': "'self' 'unsafe-inline' https://api-cdn.amazon.com use.typekit.net",
      'font-src': "'self' data: use.typekit.net https://fonts.gstatic.com",
      'connect-src': "'self' https://sts.amazonaws.com https://fumcappfiles.s3.amazonaws.com https://api.fumcpensacola.com",
      'img-src': "'self' data: p.typekit.net about: https://fumcappfiles.s3.amazonaws.com https://s3.amazonaws.com/fumcappfiles https://api.fumcpensacola.com",
      'style-src': "'self' 'unsafe-inline' https://fonts.googleapis.com use.typekit.net",
      'media-src': "'self' https://fumcappfiles.s3.amazonaws.com",
      'object-src': "'self' https://fumcappfiles.s3.amazonaws.com"
    },

    contentSecurityPolicyHeader: 'Content-Security-Policy',

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'server-development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.proxy = 'http://localhost:3000';
    ENV.host = ENV.proxy;
    ENV.contentSecurityPolicy['connect-src'] += (' ' + ENV.proxy);
    ENV.contentSecurityPolicy['img-src'] += (' ' + ENV.proxy);
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
