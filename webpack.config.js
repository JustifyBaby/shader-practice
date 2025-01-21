const path = require("node:path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const debug = process.env.NODE_ENV !== "production";

/** @type import('webpack').Configuration */
module.exports = {
  entry: path.resolve(__dirname, "src/index.ts"),
  plugins: [
    new HtmlWebpackPlugin({
      templateParameters: {
        title: "My-Shader-Tutorial",
      },
      template: path.resolve(__dirname, "dist/index.html"),
      inject: "body",
    }),
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(frag|vert|glsl)$/,
        exclude: "/node_modules/",
        use: ["raw-loader", "glslify-loader"],
      },
      {
        test: /\.(tsx|ts)$/,
        exclude: "/node_modules/",
        use: ["ts-loader"],
      },
      {
        test: /\.(png|jpg|gif)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 15000,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  mode: debug ? "development" : "production",
  devtool: debug ? "eval-source-map" : "source-map",
};
