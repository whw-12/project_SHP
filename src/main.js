import Vue from 'vue'
import App from './App.vue'
import router from '@/Router/index.js'
import store from '@/store'
import Nav from '@/components/Nav'
//按需导入API接口
import '@/assets/css/base.css'
//引入MockServer.js----mock 数据与引入css一样
import '@/mock/mockServe.js'
// 引入swiper样式
import 'swiper/css/swiper.css'

Vue.component('TypeNav', Nav)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //全局事件总线$bus
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  router,
  store
}).$mount('#app')
