const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
//   .BundleAnalyzerPlugin;

module.exports = {
  entry: "./web/src/index.js",
  mode: "development",
  output: {
    filename: "[hash].main.js",
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./index.html",
      inject: "body",
      scriptLoading: "defer",
    }),
    //new BundleAnalyzerPlugin(),
  ],
  devServer: {
    contentBase: path.join(__dirname, "build"),
    https: true,
    compress: true,
    hot: true,
    port: 8080,
    open: true,
    host: "0.0.0.0",
    disableHostCheck: true,
    useLocalIp: true,
    historyApiFallback: true,
  },
};