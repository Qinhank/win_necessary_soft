/**
  error
**/
const Mock = require('mockjs')
module.exports = function (app) {
  app.put('/api/mock/error', (req, res) => {
    res.json(Mock.mock({
  'additionalProp1': {},
  'additionalProp2': {},
  'additionalProp3': {}
}))
  })
}
