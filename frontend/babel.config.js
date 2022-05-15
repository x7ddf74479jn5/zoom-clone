module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module:react-native-dotenv",
        {
          envName: "development",
          moduleName: "@env",
          path: ".env",
          safe: true,
        },
      ],
    ],
  };
};
