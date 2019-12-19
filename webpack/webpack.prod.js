const webpackConfigCreator = require('./webpack.common');
const merge = require('webpack-merge');
const optimizeCss = require('optimize-css-assets-webpack-plugin');  //对生产模式下的css进行压缩
const ManifestPlugin = require('webpack-manifest-plugin');

const config = {
  //开发环境使用source-map,方便堆栈异常时准确定位
  devtool: "source-map",

  output: {
    //为了在每次修改代码后，浏览器都能获取到最新的js，通常会对output的名添加hash值
    filename: "js/[name][chunkhash].js",
  },

  plugins: [
    new optimizeCss({
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true
    }),

    new ManifestPlugin(),
  ]
}

const options = {
  mode: "production",
}

module.exports = merge(webpackConfigCreator(options), config);