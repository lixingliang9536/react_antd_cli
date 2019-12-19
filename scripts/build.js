const webpack = require('webpack');
const webpackConfig = require('../webpack/webpack.prod.js');

webpack(webpackConfig, (err, stats) => {
  //编译失败处理
  if(err || stats.hasErrors()){
    console.log("编译失败");
  }
  //编译成功处理---余下逻辑待写

})