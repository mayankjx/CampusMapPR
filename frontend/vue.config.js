const { ChakraLoaderPlugin } = require("chakra-loader");
const Dotenv = require("dotenv-webpack");

module.exports = {
  configureWebpack: {
    plugins: [new ChakraLoaderPlugin(), new Dotenv()],
  },
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
};
