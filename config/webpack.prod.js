const path = require("path");
const { merge } = require("webpack-merge");
const mfConfig = require("../moduleFederationConfig");
const commonConfig = require('./webpack.common');

const prodConfig = {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "..", "./build"),
    filename: "[name].[hash].js",
    clean: true
  },
};

module.exports = (env) => {
  return merge(commonConfig, prodConfig, mfConfig(env));
}