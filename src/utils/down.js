const download = (data, strFileName, strMimeType) => {
  var self = window // this script is only for browsers anyway...
    var u = 'application/octet-stream' // this default mime also triggers iframe downloads
    var m = strMimeType || u
    var x = data
    var z = function (a) {
      return String(a)
    }
    var B = self.Blob || self.MozBlob || self.WebKitBlob || z
    var BB = self.MSBlobBuilder || self.WebKitBlobBuilder || self.BlobBuilder
    var fn = strFileName || 'download'
    var blob
    var b
    // eslint-disable-next-line no-unused-vars
    var ua
    var fr

  // if(typeof B.bind === 'function' ){ B=B.bind(self); }

  if (String(this) === 'true') {
    // reverse arguments, allowing download.bind(true, "text/xml", "export.xml") to act as a callback
    x = [x, m]
    m = x[0]
    x = x[1]
  }

  // go ahead and download dataURLs right away
  // eslint-disable-next-line no-useless-escape
  if (String(x).match(/^data\:[\w+\-]+\/[\w+\-]+[,;]/)) {
    return navigator.msSaveBlob // IE10 can't do a[download], only Blobs:
      ? navigator.msSaveBlob(d2b(x), fn)
      : saver(x, fn) // everyone else can save dataURLs un-processed
  } // end if dataURL passed?

  try {
    blob = x instanceof B ? x : new B([x], { type: m })
  } catch (y) {
    if (BB) {
      b = new BB()
      b.append([x])
      blob = b.getBlob(m) // the blob
    }
  }

  function d2b (u) {
    var p = u.split(/[:;,]/)
      var t = p[1]
      var dec = p[2] === 'base64' ? atob : decodeURIComponent
      var bin = dec(p.pop())
      var mx = bin.length
      var i = 0
      var uia = new Uint8Array(mx)

    for (i; i < mx; ++i) uia[i] = bin.charCodeAt(i)

    return new B([uia], { type: t })
  }

  if (navigator.msSaveBlob) {
    // IE10+ : (has Blob, but not a[download] or URL)
    return navigator.msSaveBlob(blob, fn)
  }

  if (self.URL) {
    // simple fast and modern way using Blob and URL:
    saver(self.URL.createObjectURL(blob), fn, true)
  } else {
    // handle non-Blob()+non-URL browsers:
    if (typeof blob === 'string' || blob.constructor === z) {
      try {
        return saver('data:' + m + ';base64,' + self.btoa(blob), fn)
      } catch (y) {
        return saver('data:' + m + ',' + encodeURIComponent(blob), fn)
      }
    }

    // Blob but not URL:
    fr = new FileReader()
    fr.onload = function (e) {
      saver(this.result, fn)
    }
    fr.readAsDataURL(blob)
  }
  return true
}

function saver (url, fn, winMode) {
  var D = document
    var a = D.createElement('a')
  if ('download' in a) {
    // html5 A[download]
    a.href = url
    a.setAttribute('download', fn)
    a.innerHTML = 'downloading...'
    D.body.appendChild(a)
    setTimeout(function () {
      a.click()
      D.body.removeChild(a)
      if (winMode === true) {
        setTimeout(function () {
          self.URL.revokeObjectURL(a.href)
        }, 250)
      }
    }, 66)
    return true
  }

  // do iframe dataURL download (old ch+FF):
  var f = D.createElement('iframe')
  D.body.appendChild(f)
  if (!winMode) {
    // force a mime that will download:
    // eslint-disable-next-line no-useless-escape
    // eslint-disable-next-line
    url = 'data:' + url.replace(/^data:([\w\/\-\+]+)/, u)
  }

  f.src = url
  setTimeout(function () {
    D.body.removeChild(f)
  }, 333)
}

const downFile = (url, name, obj) => {
  const req = new XMLHttpRequest()
  // 类型设为blob
  req.responseType = 'blob'
  req.open(obj && obj.method ? obj.method : 'GET', url, true)
  req.setRequestHeader('Content-Type', 'application/json;charset=utf-8')
  // 下载完毕事件
  req.onreadystatechange = function () {
    if (req.readyState === 4 && req.status === 200) {
      download(req.response, name)
      if (obj.callback && typeof obj.callback === 'function') {
        obj.callback(req)
      }
    } else if (req.readyState === 4 && req.status !== 200) {
      alert('下载失败啦~')
    }
  }
  // 敬请开始吧
  req.send(obj && obj.data ? JSON.stringify(obj.data) : null)
}

export default downFile
