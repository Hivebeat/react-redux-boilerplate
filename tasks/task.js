var customOpts = {
  entries: ['./src/anApp/app.js'],
  debug: true
};

var bundles = require('./lib/bundler')(customOpts, 'app.js', './public/js/anApp');

module.exports = {
  watchJS: bundles.watchBundle,
  buildJS: bundles.buildBundle,
  buildCSS: require('./lib/css')('./src/anApp/css/*.scss', './public/anApp/css/')
};
