const {
  join
} = require("path");
const FriendlyErrorsPlugin = require("friendly-errors-webpack-plugin");
const WebpackBuildNotifierPlugin = require("webpack-build-notifier");
module.exports = {
  devServer: {
    contentBase: join(__dirname, "../dist"),
    historyApiFallback: true,
    hot: true,
    quiet: true
  },
  plugins: [
    new FriendlyErrorsPlugin({
      compilationSuccessInfo: {
        messages: ["You application is running here http://localhost:8080"],
        notes: ["请使用npm run client:server 运行开发环境"]
      },
      clearConsole: true,
      onErrors: function (severity, errors) {
        // You can listen to errors transformed and prioritized by the plugin
        // severity can be 'error' or 'warning'
      }
    }),
    new WebpackBuildNotifierPlugin({
      title: "My Project Webpack Build",
      suppressSuccess: true
    })
  ]
};