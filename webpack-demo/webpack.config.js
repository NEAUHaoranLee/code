const path = require('path');
const HtmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack')
const entry = require('./webpack_config/entry_webpack.js')
module.exports = {
    entry: entry,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        publicPath: 'http://127.0.0.1:8081/'
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.(jpg|png|gif)/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 500,
                        outputPath: 'images/'
                    }
                }]
            }, {
                test: /\.(html|htm)$/,
                loader: 'html-withimg-loader'
            }, {
                test: /\.(jsx|js)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            'env', 'react'
                        ]
                    }
                },
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlPlugin({
            minify: {
                removeAttributeQuotes: true
            },
            hash: true,
            template: './src/lalala.html'
        }),
        new ExtractTextPlugin('./css/lalala.css'),
        new webpack.BannerPlugin('李哥所有，翻版自愿'),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'jquery',
            filename: 'assets/js/jquery.js',
            minChunks: 2
        }),
        new webpack.ProvidePlugin({
            $: 'jquery'
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        host: '127.0.0.1',
        port: 8081
    }
}