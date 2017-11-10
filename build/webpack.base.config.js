var path = require('path');
function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    module: {
        loaders: [{
                loader: 'babel-loader',
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'source')
                ],
                exclude: [
                    /(node_modules|bower_components)/
                ],
                query: {
                    presets: 'es2015' //此配置项无效，当前目录下的.babelrc配置优先级高
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: 'vue-style-loader!css-loader',
                        // less: 'vue-style-loader!css-loader!less-loader'
                    },
                    postLoaders: {
                        html: 'babel-loader'
                    }
                }
            },
            {
                test: /\.html$/,
                //html不再移除属性双引号
                loader: "html-loader?minimize=true&removeAttributeQuotes=false"
            },
            {
                test: /\.(png|jpg)$/,
                loader: "url-loader?limit=8192"
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            'vue': 'vue/dist/vue.esm.js',
            '@': resolve('src')
        }
    }
}