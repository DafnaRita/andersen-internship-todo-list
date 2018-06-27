// const ExtractTextPlugin = require ('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
        publicPath: '/dist',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        plugins: ['transform-object-rest-spread'],
                    },
                },
                exclude: path.join(__dirname, 'node_modules'),
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader',
                }),
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(path.join(__dirname, '/dist'), { beforeEmit: true }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            isOk: true,
            filename: 'index.html',
        }),
        new ExtractTextPlugin('styles.css'),
    ],
};
