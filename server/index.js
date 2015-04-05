// To use it create some files under `mocks/`
// e.g. `server/mocks/ember-hamsters.js`
//
// module.exports = function(app) {
//   app.get('/ember-hamsters', function(req, res) {
//     res.send('hello');
//   });
// };

function usingProxy () {
    return !!process.argv.filter(function (arg) {
        return arg.indexOf('--proxy') !== -1;
    }).length;
}

module.exports = function(app) {
  var globSync   = require('glob').sync;
  var mocks      = globSync('./mocks/**/*.js', { cwd: __dirname }).map(require);
  var proxies    = globSync('./proxies/**/*.js', { cwd: __dirname }).map(require);

  // Log proxy requests
  var morgan  = require('morgan');
  app.use(morgan('dev'));
  
  if (usingProxy()) {
    console.log('Detected proxy server; ignoring mocks');
    return;
  }
  
  console.log('Using mock API');

  mocks.forEach(function(route) { route(app); });
  proxies.forEach(function(route) { route(app); });

};
