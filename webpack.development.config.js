const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
        publicPath: '/dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template/index.html',
            inject: 'body',
            isOk: true,
            filename: 'index.html',
        }),
    ],
    watch: true,
    resolve: {
        modules: ['node_modules'],
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
                exclude: /(node_modules)/,
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
            },
        ],
    },
    devServer: {
        port: 8080,
    },
};
