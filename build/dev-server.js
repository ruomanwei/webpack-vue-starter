/**
 * 本地预览
 */

var path = require('path');
var webpack = require('webpack');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
var webpackBaseConfig = require('./webpack.base.config.js');


module.exports = merge(webpackBaseConfig, {
    //多入口文件配置
    entry: {
        main:"./source/main.js",
        vendors: ['jquery','vue','axios']
    },
    output: {
        path: path.resolve(__dirname,"../dist"),
        filename: "dist/[name].js",
        publicPath: "", // 设置require.ensure路径
        chunkFilename: "dist/chunk/[name].js" // 设置require.ensure 文件名
    },
    devtool: '#eval-source-map',
    // devServer: {
    //     // contentBase: "", //本地服务器所加载的页面所在的目录
    //     historyApiFallback: true, //不跳转
    //     inline: true,
    //     hot: true
    // },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendors', filename: 'vendor.bundle.js' }),
        new HtmlWebpackPlugin({
            inject: true,
            filename: path.join(__dirname, '../dist/index.html'),
            template: path.join(__dirname, '../index.html')
        }),
        new FriendlyErrorsPlugin()
    ]
});
