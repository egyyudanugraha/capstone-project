const { merge } = require('webpack-merge');
const webpack = require('webpack');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
      'process.env.BASE_URL_API': JSON.stringify(process.env.BASE_URL_API),
      'process.env.BASE_URL_NEWS': JSON.stringify(process.env.BASE_URL_NEWS),
      'process.env.PUBLIC_KEY_SERVER': JSON.stringify(process.env.PUBLIC_KEY_SERVER),
    }),
  ],
});
