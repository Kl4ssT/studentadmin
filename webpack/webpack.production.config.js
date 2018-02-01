import webpack from 'webpack';
import Config from 'webpack-config';

export default new Config().extend('webpack/webpack.base.config.js').merge({
    output: {
        filename: 'admin.min.js'
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: true
            }
        })
    ]
});