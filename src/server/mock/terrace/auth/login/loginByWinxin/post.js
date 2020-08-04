/**
  微信登录
**/
const Mock = require('mockjs')
module.exports = function (app) {
  app.post('/api/mock/terrace/auth/login/loginByWinxin', (req, res) => {
    res.json(Mock.mock({
  'data': {
    'token': '@string'
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
