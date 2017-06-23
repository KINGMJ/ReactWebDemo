var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin'); //copy文件到输出目录

var config = {
    //页面入口文件配置
    entry: {
        app: ['./src/app/index.js']
        // app: ['./src/app/demo9/demo9.js']
        // app: ['./src/app/demo10/demo10.js']
        // app: ['./src/app/demo11/demo11.js']
    },

    devServer: {
        proxy: {
            '/api': {
                target: 'http://leangootest.com:80',
                secure: false,
                changeOrigin: true,
                pathRewrite: {'^/api': ''}
            }
        }
    },

    output: {
        path: __dirname + '/dist/',
        contentBase: 'dist/',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            {test: /\.less$/, loader: 'style-loader!css-loader!less-loader'},
            {test: /\.css$/, loader: 'style-loader!css-loader'}
        ]
    },
    plugins: [
        new CopyWebpackPlugin([
            {from: './src/index.html', to: './index.html'},
            {from: './src/app/lib', to: './lib'}
        ])
    ]
};

module.exports = config;