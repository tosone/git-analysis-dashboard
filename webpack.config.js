const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry: [
        'webpack-dev-server/client?http://127.0.0.1:8080',//资源服务器地址
        'webpack/hot/only-dev-server',
        './src/app.js'
    ],
    output: {
        path: 'public',
        filename: '[hash].js',
        publicPath: 'http://127.0.0.1:8080/public'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                }
            },
            { test: /\.less$/, loader: "css!less?strictMath&noIeCompat" },
            { test: /\.css$/, loader: 'css' },
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
                loader: 'url-loader',
                query: {
                    name: '[name].[ext]?[hash]',
                    limit: 100,
                }
            },
            {
                test: /\.(eot|ttf|wav|mp3)$/,
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]?[hash]',
                }
            }
        ]
    },
    resolve: {
        root: path.resolve('./src'),
        extensions: ['', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            templateContent: function (templateParams, compilation) {
                return [
                    '<html>',
                    '<head lang="zh-cn">',
                    '</head>',
                    '<body><div id="root"></div></body>',
                    '<html>'
                ].join('');
            },
            hash: true
        }),
        new FaviconsWebpackPlugin({
            logo: './favicon.png',
            icons: {
                android: true,
                appleIcon: true,
                appleStartup: true,
                coast: false,
                favicons: true,
                firefox: true,
                opengraph: false,
                twitter: false,
                yandex: false,
                windows: false
            }
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}