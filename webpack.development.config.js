const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
        publicPath: '/dist',
    },
    watch: true,
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
                loader: 'style-loader!css-loader',
            },
        ],
    },
    devServer: {
        port: 8080,
        host: 'localhost',
        openPage: '/dist',
        open: true,
        watchContentBase: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            isOk: true,
            filename: 'index.html',
        }),
    ],
};
