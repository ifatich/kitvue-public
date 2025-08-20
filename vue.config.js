const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,

  css: {
    loaderOptions: {
      scss: {
        // ini yang bakal sembunyikan warning dari node_modules
        sassOptions: {
          quietDeps: true,
        },
      },
    },
  },
})
