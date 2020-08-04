
const { proxy, port, alias, title, useCDN, cdn } = require('./static/config')
const path = require('path')
const fs = require('fs')
const { DynamicImportCdnPlugin } = require('webpack-dynamic-import-cdn-plugin')
const PrerenderSPAPlugin = require('prerender-spa-plugin')

// 将view文件下的子文件遍历并生成routers
const loopViews = (name) => {
  const directory = `./src/${name || 'views'}`
  const arr = fs.readdirSync(directory)
  return arr.map(_ => {
    return `/${ _.replace('.vue', '') }`
  })
}

module.exports = {
  outputDir: 'gh-pages',
  publicPath: './',
  configureWebpack: { // webpack配置，值位对象时会合并配置，为方法时会改写配置
    resolve: {
      alias
    },
    plugins: [...useCDN ? [new DynamicImportCdnPlugin({
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
    })] : [], new PrerenderSPAPlugin({
      // Required - The path to the webpack-outputted app to prerender.
      staticDir: path.join(__dirname, 'gh-pages'),
      // Required - Routes to render.
      routes: [ '/', ...loopViews() ]
    }) ]
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
