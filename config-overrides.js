const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@": "src",
    "@components": "src/Components",
    "@assets": "src/assets",
    "@views": "src/views",
    "@styles": "src/styles",
    "@store": "src/store",
    "@config": "src/config",
    "@database": "src/database",
  })(config);

  return config;
};
