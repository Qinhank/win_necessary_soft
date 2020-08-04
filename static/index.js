var express = require('express')
var history = require('connect-history-api-fallback')
var proxy = require('http-proxy-middleware')
var app = express()

const { port, proxy: proxys } = require('./config')

const src = './public/'

// 设置代理
app.use(`/api/official/**`, proxy(proxys['/api/official/']))

app.use(history()) // 这里千万要注意，要在static静态资源上面

app.use(express.static(src))

app.listen(port)

console.log(`服务已开启，当前端口为${port}`)
