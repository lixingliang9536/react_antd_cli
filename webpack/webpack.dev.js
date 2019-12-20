const webpackConfigCreator = require('./webpack.common');
const merge = require('webpack-merge');
const path = require('path');

const config = {
  //生产环境使用inline-source-map,方便堆栈异常时准确定位
  devtool: "inline-source-map",

  output: {
    //为了在每次修改代码后，浏览器都能获取到最新的js，通常会对output的名添加hash值
    filename: "js/[name][hash].js",
  },

  devServer: {
    contentBase: path.join(__dirname, "../dist"),
    // hot: true   //热更新
  }
}

const options = {
  mode: "development"
}

module.exports = merge(webpackConfigCreator(options), config);