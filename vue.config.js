
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 关闭eslint校验
  lintOnSave: false,
  css: {
    extract: false
  },
  devServer: {
    proxy: {
      '/api': {  // 拦截所有请求
        target: 'http://121.199.161.167:8082', // 您的后端服务器地址
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''  // 重写路径，去除请求路径中的 '/api'
        }
      }
    }
  }
})