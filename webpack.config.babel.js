import Config, { environment } from 'webpack-config';

environment.setAll({
    env: () => process.env.NODE_ENV
});

module.exports = new Config().extend('webpack/webpack.[env].config.js');