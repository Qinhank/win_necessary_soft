/**
  上传设备信息
**/
const Mock = require('mockjs')
module.exports = function (app) {
  app.post('/api/mock/device/device/set', (req, res) => {
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
