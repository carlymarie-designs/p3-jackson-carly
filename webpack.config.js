const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist")
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  
  devServer: {
    contentBase: './dist' //where contents are served from
  },
  
  plugins: [
    new HtmlWebpackPlugin({
       filename: 'index.html', // name of html file to be created
       template: './index.html' // source from which html file would be created
    })
  ]

}