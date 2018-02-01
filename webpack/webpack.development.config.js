import webpack from 'webpack';
import path from 'path';
import Config from 'webpack-config';

export default new Config().extend('webpack/webpack.base.config.js').merge({
    entry: [
        'react-hot-loader/patch',
        path.resolve(__dirname, '..', 'src', 'index.js'),
    ],
    devtool: 'eval-source-map',
    output: {
        filename: 'admin.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, '..', 'build'),
        host: '0.0.0.0',
        port: '7000',
        proxy: {
            '/api': 'http://localhost:8090/api'
        },
        historyApiFallback: true,
        hot: true,
        inline: true,
        noInfo: true,
        compress: true,
        progress: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});