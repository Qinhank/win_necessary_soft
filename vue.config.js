
const { proxy, port, alias, title, useCDN, cdn } = require('./static/config')
const { DynamicImportCdnPlugin } = require('webpack-dynamic-import-cdn-plugin')

module.exports = {
  outputDir: 'static/public',
  configureWebpack: { // webpack配置，值位对象时会合并配置，为方法时会改写配置
    resolve: {
      alias
    },
    plugins: useCDN ? [new DynamicImportCdnPlugin({
      css: {
        'element-ui/lib/theme-chalk/index.css':
          `${cdn}/npm/element.min.css`
      },
      js: {
        vue: {
          moduleName: 'Vue',
          url: `${cdn}/npm/vue.min.js`
        },
        'element-ui': {
          moduleName: 'element-ui',
          url: `${cdn}/npm/element.min.js`
        }
      }
    })] : []
  },
  chainWebpack: config => {
    config
    .plugin('html')
    .tap(args => {
      args[0].title = title
      return args
    })
  },
  css: {
    loaderOptions: {
      // 给 sass-loader 传递选项
      scss: {
        // @/ 是 src/ 的别名
        // 注意：在 sass-loader v7 中，这个选项名是 "data"
        prependData: `@import "~@/theme/default.scss";`
      }
    }
  },
  lintOnSave: undefined,
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    },
    open: process.platform === 'darwin',
    https: false,
    hotOnly: false,
    port,
    disableHostCheck: true,
    proxy, // 设置代理
    before: app => {}
  }
}
