const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const { InjectManifest } = require('workbox-webpack-plugin');
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new WebpackPwaManifest({
      name: 'Apptivity',
      short_name: 'Apptivity',
      description: 'Apptivity is a web app that helps you manage your appointments.',
      background_color: '#ffffff',
      theme_color: '#9333ea',
      start_url: '/',
      ios: true,
      icons: [
        {
          src: path.resolve(__dirname, 'src/public/favicon.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          purpose: 'any',
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/'),
        },
      ],
    }),
    new InjectManifest({
      swSrc: path.resolve(__dirname, 'src/scripts/service-worker.js'),
      swDest: 'sw.js',
    }),
    new ImageminWebpWebpackPlugin({
      config: [
        {
          test: /\.(jpe?g|png)/,
          options: {
            quality: 80,
          },
        },
      ],
      overrideExtension: true,
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      minSize: 10000,
      maxSize: 50000,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: '~',
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
    minimizer: [
      new TerserPlugin({
        test: /\.js(\?.*)?$/i,
        parallel: true,
      }),
    ],
  },
};
