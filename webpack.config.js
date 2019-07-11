const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
// const defaultConfig = require('@open-wc/building-webpack/default-config');
const defaultConfig = require('@open-wc/building-webpack/modern-and-legacy-config');

module.exports = defaultConfig({
  indexHTML: path.resolve(__dirname, './src/index.html'),
  indexJS: path.resolve(__dirname, './src/index.js'),
});
