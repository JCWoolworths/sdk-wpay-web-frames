const path = require("path");
const Dotenv = require("dotenv-webpack");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = (env, argv) => {
  const isDevelopment = argv.mode === "development";
  return {
    entry: {
      everydayPay: path.join(__dirname, "/src/index.tsx"),
    },
    devtool: "source-map",
    mode: argv.mode,
    output: {
      globalObject: "this",
      path: path.join(__dirname, "/dist"),
      filename: "[name].js",
      library: "EverydayPay",
      libraryTarget: "umd",
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          type: "asset/inline",
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: "asset/inline",
        },
        {
          test: /\.(js|jsx|mjs|ts|tsx)$/,
          exclude: [
            /vue-test-simulator/,
            /react-test-simulator/,
            /node_modules/,
            /mockServer/,
            /test/,
            /public/,
            /scripts/,
          ],
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: [
                  ["@babel/preset-env", { modules: "commonjs" }],
                  "@babel/preset-typescript",
                  ["@babel/preset-react", { runtime: "automatic" }],
                ],
                plugins: [
                  "@babel/plugin-proposal-class-properties",
                  "@babel/plugin-proposal-object-rest-spread",
                  "@babel/plugin-syntax-dynamic-import",
                  "@babel/plugin-transform-runtime",
                ],
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    plugins: [new Dotenv()],
  };
};
