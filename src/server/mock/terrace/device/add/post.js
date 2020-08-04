/**
  添加设备
**/
const Mock = require('mockjs')
module.exports = function (app) {
  app.post('/api/mock/terrace/device/add', (req, res) => {
    res.json(Mock.mock({
  'data': {},
  'meta': {
    'message': '@string',
    'success': false
  },
  'unAuthorization': false,
  'unlogin': false
}))
  })
}
