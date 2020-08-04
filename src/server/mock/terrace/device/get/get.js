/**
  获取我得设备
**/
const Mock = require('mockjs')
module.exports = function (app) {
  app.get('/api/mock/terrace/device/get', (req, res) => {
    res.json(Mock.mock({
  'data': [
    {
      'address': '@string',
      'alias': '@string',
      'companyName': '@string',
      'createTime': '@datetime',
      'deviceId': '@string',
      'linkman': '@string',
      'phone': '@string'
    }
  ],
  'meta': {
    'message': '@string',
    'success': false
  },
  'unAuthorization': false,
  'unlogin': false
}))
  })
}
