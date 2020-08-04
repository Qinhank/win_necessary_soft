/**
  批量上传数据
**/
const Mock = require('mockjs')
module.exports = function (app) {
  app.post('/api/mock/device/record/batchCreate', (req, res) => {
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
