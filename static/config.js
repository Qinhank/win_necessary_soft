/**
 * javascript comment
 * @Author: hankqin
 * @Date: 2020-05-14 09:47:42
 * @Desc: 脚手架的公共配置
 */
const path = require('path')

const swaggerServerPort = 8091

module.exports = {
  title: 'Windows装机必备',
  ename: 'winNecessarySoft',
  port: 3481,
  site: '',
  cdn: '',
  useCDN: false, // 是否对vue、vant使用cdn
  baseURL: process.env.NODE_ENV === 'production' ? '/api/official' : '/api/v1',
  token: 'authorization',
  isAutomaticSwitching2Mock: process.env.NODE_ENV !== 'production', // 当后端接口无效时是否自动切换到mock接口
  swagger: {
    port: swaggerServerPort,
    swaggerOptions: {
      url: 'http://192.168.0.253:9003/v2/api-docs', // 后端swagger接口，用于爬取接口数据
      outputPath: './mock',
      blacklist: []
    },
    filePath: path.resolve(__dirname, '../src/api.js')
  },
  storageOption: {
    namespace: 'bp-cli__', // key prefix
    name: 'ls', // name variable Vue.[ls] or this.[$ls],
    storage: 'local' // storage name session, local, memory
  },
  proxy: {
    // 本地后端接口
    '/api/v1/': {
      'target': 'http://192.168.0.253:4000',
      'changeOrigin': true,
      'pathRewrite': { '^/api/v1': '/api/v1.0' },
      'secure': false
    },
    // 本地mock接口
    '/api/mock/': {
      'target': `http://127.0.0.1:${swaggerServerPort}`,
      'changeOrigin': true,
      'secure': false
    },
    // 线上正式接口
    '/api/official/': {
      'target': 'http://pefapi.bepai.net',
      'changeOrigin': true,
      'pathRewrite': { '^/api/official': '' },
      'secure': false
    }
  },
  alias: {
    '@': path.resolve(__dirname, '../src'),
    'components': path.resolve(__dirname, '../src/components'),
    'vue$': 'vue/dist/vue.esm.js',
    '@config': path.resolve(__dirname, '../static/config')
  }
}
