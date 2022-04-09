const path = require('path')

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const PATHS = {
  src: path.join(__dirname, 'src'),
  dist: path.resolve(__dirname, '../dist'),
}

module.exports = (env) => {
  return {
    mode: 'development',
    entry: './index.tsx',
    // for Development, not production - see other options.
    devtool: 'eval-source-map',
    stats: {
      errorDetails: true,
    },
    output: {
      path: PATHS.dist,
      filename: 'bundle.js',
      clean: true, // clean the output directory before emit.
    },
    module: {
      rules: [
        {
          test: /\.?tsx$/,
          exclude: /node_modules/,
          use: {
            loader: 'ts-loader',
          },
        },
        {
          test: /\.scss$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    plugins: [
      new webpack.ProgressPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, '../index.html'),
      }),
      new MiniCssExtractPlugin(),
    ],
  }
}
