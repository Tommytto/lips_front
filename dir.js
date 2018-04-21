const path = require('path');

module.exports = {
  node: 'node_modules',
  src: path.join(__dirname, 'src'),
  public: path.join(__dirname, 'public'),
  build: path.join(__dirname, 'public/build'),
};
