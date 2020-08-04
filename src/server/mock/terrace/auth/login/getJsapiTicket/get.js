/**
  微信jsapi授权签名
**/
const Mock = require('mockjs')
module.exports = function (app) {
  app.get('/api/mock/terrace/auth/login/getJsapiTicket', (req, res) => {
    res.json(Mock.mock({
  'data': {
    'appId': '@string',
    'nonceStr': '@string',
    'signature': '@string',
    'timestamp': '@integer(60, 100)',
    'url': '@string'
  },
  'meta': {
    'message': '@string',
    'success': false
  },
  'unAuthorization': false,
  'unlogin': false
}))
  })
}
