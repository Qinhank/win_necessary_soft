import Vue from 'vue'
import Storage from 'vue-ls'

import 'babel-polyfill'
import 'element-ui/lib/theme-chalk/index.css'
import '@/theme/element.scss'
import T from '@/components/T'

const { storageOption, useCDN } = require('@config')

Vue.config.productionTip = false

let element

if (!useCDN) {
  element = require('element-ui')
} else {
  element = window.ELEMENT
}

Vue.prototype.$msg = element.Message

Vue.use(element)

Vue.use(T)

Vue.use(Storage, storageOption)
