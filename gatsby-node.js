exports.onCreateWebpackConfig = ({ actions, plugins }) => {
  actions.setWebpackConfig({
    resolve: {
      fallback: {
        crypto: require.resolve("crypto-browserify"),
        stream: require.resolve("stream-browserify"),
        vm: require.resolve("vm-browserify"),
        http: require.resolve("stream-http"),
        https: require.resolve("https-browserify"),
        os: require.resolve("os-browserify/browser"),
        scrypt: require.resolve("scrypt-js"),
      },
    },
    plugins: [
      plugins.provide({
        Buffer: ["buffer/", "Buffer"],
        process: "process/browser",
      }),
    ],
  });
};
