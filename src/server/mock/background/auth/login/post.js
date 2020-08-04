/**
  登录
**/
const Mock = require('mockjs')
module.exports = function (app) {
  app.post('/api/mock/background/auth/login', (req, res) => {
    res.json(Mock.mock({
  'data': '@string',
  'meta': {
    'message': '@string',
    'success': false
  },
  'unAuthorization': false,
  'unlogin': false
}))
  })
}
