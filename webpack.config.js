const path = require("path");
module.exports = {
  entry: path.join(__dirname, "src/app.js"),
  output: {
    path: path.join(__dirname, "public/detergent/js"),
    filename: "app.js",
  },
  mode: "development",
  module: {
    rules: [
      {
        loader: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/,
      },
    ],
  },
  devtool: "eval-cheap-module-source-map",
  devServer: {
    //    index: "home.html",
  },
};
