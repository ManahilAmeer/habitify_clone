const { alias } = require("react-app-rewire-alias");

module.exports = function override(config) {
  alias({
    "@": "src",
    "@components": "src/Components",
    "@assets": "src/assets",
    "@styles": "src/styles",
    "@shared": "src/shared",
  })(config);

  return config;
};
