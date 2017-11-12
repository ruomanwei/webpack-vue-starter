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
        vendors: ['vue','vue-router','es6-promise','axios','jquery']
    },
    output: {
        path: path.resolve(__dirname,"../dist"),
        filename: "dist/[name].js",
        publicPath: "", // 设置require.ensure路径
        chunkFilename: "dist/chunk/[name].js" // 设置require.ensure 文件名
    },
    devtool: '#eval-source-map',
    devServer: {
        // contentBase: path.join(__dirname, "../source"), //本地服务器所加载的页面所在的目录
        historyApiFallback: true, 
        open: true, //启动服务时是否打开网页
        port:9000, //默认服务器端口号
        compress: true //是否启用Gzip压缩

        // --open --inline --hot --compress --history-api-fallback --port 8080
    },
    plugins: [
        new FriendlyErrorsPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendors', filename: 'vendor.bundle.js' }),
        new HtmlWebpackPlugin({
            inject: true,
            filename: path.join(__dirname, '../dist/index.html'),
            template: path.join(__dirname, '../source/index.html')
        })
    ]
});
