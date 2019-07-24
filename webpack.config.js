const argv = require("yargs-parser")(process.argv.slice(2)); //这个包解析参数
const _mode = argv.mode || "development";
console.log(argv);
console.log(process.argv.slice);

const _mergeConfig = require(`./config/webpack.${_mode}.js`);
const merge = require("webpack-merge");
const { resolve } = require("path");
const { CheckerPlugin } = require("awesome-typescript-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const webpackConfig = {
  entry: {
    app: resolve("./src/web/index.tsx")
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        include: [resolve("src")],
        exclude: /node_modules/,
        loader: "awesome-typescript-loader"
      }
    ]
  },
  plugins: [
    new CheckerPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "src/web/index.html"
    })
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".jsx", ".js"]
  }
};
module.exports = merge(webpackConfig, _mergeConfig);
