/* eslint-disable */

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = ({ mode = "production" }) => {
  const config = {
    mode,
    entry: {
      "runes-repro": path.resolve(__dirname, "src/runes-repro.ts"),
    },
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].js",
      clean: true,
    },
    resolve: {
      extensions: [".mjs", ".js", ".ts", ".svelte"],
      conditionNames: ["svelte", "browser", "import", "require", "node"],
    },
    module: {
      rules: [
        {
          test: /\.svg/,
          type: "asset/source",
        },
        {
          test: /\.(js|ts)x?$/,
          exclude: /node_modules/,
          use: [{ loader: "swc-loader" }],
        },
        {
          test: /\.m?js/,
          resolve: {
            fullySpecified: false,
          },
        },
        {
          test: /\.(html|svelte)$/,
          use: "svelte-loader",
        },
      ],
    },
    plugins: [new HtmlWebpackPlugin()],
    devtool: "source-map",
  };

  return config;
};
