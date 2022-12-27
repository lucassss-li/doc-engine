const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, '../playground/index.js'),
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../playground/index.html'),
        }),
    ],
    devServer: {
        compress: true,
        host: '127.0.0.1',
        port: 9000,
        open: true,
        hot: true,
    },
    resolve: {
        alias: {
            'doc-engine': path.resolve(__dirname, '../dist'),
            extensions: ['.js', '.json', '.ts'],
        },
    },
}
