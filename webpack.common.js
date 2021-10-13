const pkg = require("./package.json");
const path = require("path");
const DotEnv = require("dotenv-webpack");

module.exports = {
  plugins: [
    new DotEnv({
      path: `./.env.${process.env.NODE_ENV}`,
      safe: "./.env.example",
      systemvars: true,
      defaults: "./.env.example",
    }),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  entry: {
    main: path.resolve(__dirname, "src/js/main/index.js"),
    "merkle-drop": path.resolve(__dirname, "src/js/merkle-drop/index.js"),
    auction: path.resolve(__dirname, "src/js/auction/index.js"),
    newsletter: path.resolve(__dirname, "src/js/newsletter/index.js"),
  },

  output: {
    filename: `${pkg.version}/[name].js`,
    path: path.resolve(__dirname, "dist/js"),
    library: ["tl", "[name]"],
  },

  externals: {
    jquery: "jQuery",
    window: "window",
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        common: {
          name: "common",
          chunks: "initial",
          minChunks: 2,
        },
      },
    },
  },
};
