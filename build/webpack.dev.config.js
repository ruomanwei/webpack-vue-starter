var webpack = require('webpack');
var path = require('path');
var merge = require('webpack-merge');
var prod = process.env.NODE_ENV === 'production' ? true : false; //判断是否生产环境
var webpackBaseConfig = require('./webpack.base.config.js');

module.exports = merge(webpackBaseConfig,{
    //多入口文件配置
    entry: {
        'vue-tree/app':'./source/components/vue-tree/app.js'
    },
    output: {
        path: path.resolve(__dirname,'../'),
        filename: 'dist/[name].js',
        publicPath: '/', // 设置require.ensure路径
        chunkFilename: 'dist/chunk/[name].js' // 设置require.ensure 文件名
    },
    externals: {
        'jquery': 'jquery',
        'vue': 'vue',
        'vue-router': 'vue-router',
        'axios': 'axios',
        'es6-promise': 'es6-promise',
    }
});

if (prod) {
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
        }),
        new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false, properties: false, drop_console: true } })
    ]);
}
 