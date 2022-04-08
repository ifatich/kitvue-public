const path = require("path");

vueSrc = "./src";
module.exports = {
  runtimeCompiler: true,
  devServer: {
    disableHostCheck: true,
  },
  css: {
    loaderOptions: {
      // by default the `sass` option will apply to both syntaxes
      // because `scss` syntax is also processed by sass-loader underlyingly
      // but when configuring the `prependData` option
      // `scss` syntax requires an semicolon at the end of a statement, while `sass` syntax requires none
      // in that case, we can target the `scss` syntax separately using the `scss` option
      // sass: {
      //   prependData: `@import "@/assets/scss/main.scss";`,
      // }
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, vueSrc),
        "@components": path.resolve(__dirname, `${vueSrc}/components`),
        "@views": path.resolve(__dirname, `${vueSrc}/views`),
      },
      extensions: [".js", ".vue", ".json"],
    },
  },
};
