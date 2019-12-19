const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); //分离样式文件

function webpackCommonConfigCreator(options){
  return {
    mode: options.mode,

    entry: "./src/index.js",    //入口文件
    
    output: {
      path: path.resolve(__dirname, "../build"),    //打包文件存放路径
      publicPath: "/"   //配置公共路径
    },

    // 分割打包的JS文件
    optimization: {
      splitChunks: {
        chunks: "all",
        minSize: 50000,
        minChunks: 1,
      }
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "../index.html")  //模板文件
      }),

      new CleanWebpackPlugin({
        cleanOnceBeforeBuildPatterns: [path.resolve(process.cwd(), "build/"), path.resolve(process.cwd(), "dist/")]   //打包时自动清理目录
      }),

      new ExtractTextPlugin({
        filename: "css/[name][hash].css"    //用于分离样式文件
      }),
    ],

    module: {
      rules: [
        //配置JS / JSX 解析
        {
          test: /\.(js|jsx)$/,
          include: path.resolve(__dirname, "../src"),
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-react'],
                plugins: [
                  "react-hot-loader/babel",   //热更新
                  // antd 按需加载样式配置
                  [
                    "import", {
                      "libraryName": "antd",
                      "libraryDirectory": "es",
                      "style": "css" // `style: true` 会加载 less 文件
                    }
                  ]
                ],
              }
            }
          ]
        },

        //配置CSS样式解析
        {
          test: /\.css$/,
          // include: path.resolve(__dirname, '../src'),
          // use: ["style-loader", "css-loader"]

          // use: [
          //   "style-loader",
          //   {
          //     loader: "css-loader",
          //     options: {
          //       modules: false, //控制是否关闭css-module模式
          //     }
          //   }
          // ]

          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
              {
                loader: "css-loader",
                options: {
                  modules: false, //控制是否开启css-module模式
                }
              }
            ]
          })
        },

        //配置less
        {
          test: /\.less$/,
          // include: path.resolve(__dirname, '../src'),
          // use: ["style-loader", "css-loader", "less-loader"]

          // use: [
          //   "style-loader",
          //   {
          //     loader: "css-loader",
          //     options: {
          //       modules: true,//控制是否开启css-module模式
          //     }
          //   },
          //   {
          //     loader: "less-loader"   //webpack会从最下方应用loader
          //   }
          // ]

          use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: [
              {
                loader: "css-loader",
                options: {
                  modules: false,//控制是否开启css-module模式
                }
              },
              {
                loader: "less-loader"   //webpack会从最下方应用loader
              }
            ]
          })
        },

        //配置字体解析
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            {
              loader: 'file-loader'
            }
          ]
        },

        //配置图片解析
        {
          test: /\.(jpg|png|svg|gif)$/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10240,   //小于10KB的图片编译成了base64格式，而大于10k的图片以链接形式赋值给src
                name: 'images/[hash].[ext]',
                publicPath: "/"
              }
            }
          ]
        },
      ]
    }
  }
}

module.exports = webpackCommonConfigCreator