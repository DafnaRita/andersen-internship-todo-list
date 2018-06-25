// const ExtractTextPlugin = require ('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/template/index.html',
            isOk: true,
            inject: 'body',
        }),
    ],
    watch: true,
    resolve: {
        modules: ['node_modules'],
    },
    module: {
        rules: [
            {
                test: /\.js/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/,
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
            },
        ],
    },
};
