const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');
const webpackConfig = require('../webpack/webpack.dev.js');
const compiler = webpack(webpackConfig);

const options = Object.assign({}, webpackConfig.devServer, {
  open: false //控制启动项目时是否自动在浏览器中打开项目
})
const server = new webpackDevServer(compiler, options);

server.listen(9536, '0.0.0.0', () => {
  console.log('Starting server on http://localhost:9536');
})