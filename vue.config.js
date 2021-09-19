// vue.config.js

/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  publicPath: process.env.NODE_ENV === "github" ? "/vue-tutrial/" : "/",
  runtimeCompiler: true,
  configureWebpack: {
    devtool: "source-map",
  },
  filenameHashing: false,
  productionSourceMap: false,
};
