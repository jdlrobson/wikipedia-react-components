var conf = module.exports = require('./webpack.config.js')

conf.entry = {
  demo: './demo/build.js'
};
conf.externals = {};
module.exports = conf;