const { ChakraLoaderPlugin } = require("chakra-loader");
const Dotenv = require("dotenv-webpack");

module.exports = {
  configureWebpack: {
    plugins: [new ChakraLoaderPlugin(), new Dotenv()],
  },
};
