const fs = require('fs')
const { join } = require('path')
const express = require('express')
const { promisify } = require('util')
const mkdirp = require('mkdirp')
const swaggerParserMock = require('swagger-parser-mock')

const writeFile = promisify(fs.writeFile)
const mkdir = promisify(mkdirp)
const { swagger } = require(`../../static/config`)
const { swaggerOptions, port } = swagger

const synchronizeSwagger = {
  init ({ url, blacklist, outputPath }) {
    this.url = url
    this.blacklist = blacklist
    this.outputPath = outputPath
    this.parse()
  },

  async parse () {
    const { paths } = await swaggerParserMock(this.url)
    this.traverse(paths)
  },

  generateTemplate ({ summary, example, method, path }) {
    // prettier-ignore
    // api path中的{petId}形式改为:petId
    return `/**
  ${summary}
**/
const Mock = require("mockjs");
module.exports = function (app) {
  app.${method}('/api/mock${path.replace(/\{([^}]*)\}/g, ':$1')}', (req, res) => {
    res.json(Mock.mock(${example}));
  });
};`
  },

  // 遍历api path信息
  traverse (paths) {
    console.log(`正在生成mock文件...`)
    for (const path in paths) {
      if (this.blacklist.includes(path)) {
        continue
      }

      for (const method in paths[path]) {
        const pathInfo = paths[path][method]

        if (!pathInfo['responses']['200']) {
          continue
        }
        this.generate(path, method, pathInfo)
      }
    }
  },

  async generate (path, method, pathInfo) {
    const outputPath = join(__dirname, this.outputPath, path)
    const {
      summary,
      responses: { 200: responseOK }
    } = pathInfo

    try {
      // 生成目录
      await mkdir(outputPath)

      const example = responseOK['example']
      // 生成文件内容
      const template = this.generateTemplate({
        summary,
        example,
        method,
        path
      })

      // 生成文件, 已存在的跳过，避免覆盖本地以及编辑的文件
      const fPath = join(outputPath, `${method}.js`)
      await writeFile(fPath, template, { flag: 'wx' })
    } catch (error) {
      // console.log(error)
    }
  }
}
synchronizeSwagger.init(swaggerOptions)
// 生成mock-server
const app = express()

function scan (path, app) {
  try {
    const files = fs.readdirSync(path)
    for (let i = 0; i < files.length; i++) {
      const fpath = join(path, files[i])
      const stats = fs.statSync(fpath)

      if (stats.isDirectory()) {
        scan(fpath, app)
      }
      if (stats.isFile()) {
        require(fpath)(app)
      }
    }
  } catch (err) {
    console.log(err)
  }
}

setTimeout(() => {
  scan(join(__dirname, './mock'), app)
  app.listen(port, function () {
    console.log(`服务已开启，端口为：${port}`)
  })
}, 3000)
