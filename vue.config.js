const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  //代理跨域
//   devServer: {
//   contentBase: path.join(__dirname, "dist"),
//   compress: true,
//   port: 9000
// }
  devServer: {
      proxy: {
        '/api': {
          target: 'http://39.98.123.211',
          pathRewrite: {'^/api': ''},
      },
    },
  },
  
})
