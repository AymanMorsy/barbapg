const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    clean: true,
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      /* if you using css only use this rule*/
      // {test:/\.css/,use:[MiniCssExtractPlugin.loader,"css-loader"]}
      {
        test: /\.scss/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin(),
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'src', 'index.html'),
    }),
    new htmlWebpackPlugin({
      filename: 'about.html',
      template: path.resolve(__dirname, 'src', 'about.html'),
    }),
  ],

  devServer: {
    watchFiles: ['src/*.html'],
  },
};
