/**
  根据设备分页查询记录
**/
const Mock = require('mockjs')
module.exports = function (app) {
  app.get('/api/mock/terrace/record/findPageByDevice', (req, res) => {
    res.json(Mock.mock({
  'data': {
    'list': [
      {
        'batchNumber': '@string',
        'flow': '@string',
        'handleDay': '@string',
        'handleSecond': '@string',
        'id': '@string',
        'items': [
          {
            'downstream': '@string',
            'efficiency': '@string',
            'name': '@string',
            'upstream': '@string'
          }
        ],
        'pm': '@string',
        'resistance': '@string'
      }
    ],
    'total': '@integer(60, 100)'
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
