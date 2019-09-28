const path = require("path");

module.exports = {
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.woff$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist")
  }
};
