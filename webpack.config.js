const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.[contenthash].js"
  },
  module: {
    rules: [
      {test: /\.js$/, 
      exclude: /node_modules/,
      use: ["babel-loader"]},
      {test: /\.css$/, use: ["style-loader", "css-loader"]}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    })
  ],
}