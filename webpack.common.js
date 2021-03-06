const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Production',
      template: "./src/index.html",
      filename: "./index.html"
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      // Task to js file : linter
      {
        test: /\.(js|jsx|mjs)$/,
        enforce: 'pre',
        use: ['eslint-loader']
      },
      // Task to js file
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: ['babel-loader']
      },
      // Task to sass file
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              minimize: true
            }
          },
          {
            loader: "sass-loader"
          }
        ]
      },
      // Task to images files
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      // Task to fonts files
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
};