import Card from './card.vue'

export default {
  install: function (vm) {
    // 注册全局组件
    vm.component('t-card', Card)
  }
}
