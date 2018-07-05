// const ExtractTextPlugin = require ('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.[hash:8].js',
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
            {
                test: /\.woff$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'fonts',
                    },
                }],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin(path.join(__dirname, 'dist'), { beforeEmit: true }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        }),
        new ExtractTextPlugin('styles.[hash:8].css'),
    ],
};
