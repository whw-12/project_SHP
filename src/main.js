import Vue from 'vue'
import App from './App.vue'
import router from '@/Router/index.js'
import store from '@/store'
import Nav from '@/components/Nav'
import Pagination from '@/components/Pagination/index'

//按需引入element-ui
import { MessageBox,Button } from 'element-ui';

//按需导入API接口
import '@/assets/css/base.css'
//引入MockServer.js----mock 数据与引入css一样
import '@/mock/mockServe.js'
// 引入swiper样式
import 'swiper/css/swiper.css'
//element 全局组件
Vue.component(Button.name, Button);

Vue.component('TypeNav', Nav)
Vue.component('PaginationName',Pagination)
//引入element-ui弹窗
//挂载到原型上
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;

Vue.config.productionTip = false

//统一接口api文件夹里面全部请求函数
import * as API from '@/api'

//引入图片懒加载插件
import VueLazyload from 'vue-lazyload'

//引入图片
import author from '@/assets/images/1.jpg'

//注册插件
Vue.use(VueLazyload, {
  loading: author,
})

//引入表单验证插件
import '@/plugins/validate'
new Vue({
  render: h => h(App),
  //全局事件总线$bus
  beforeCreate() {
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  router,
  store
}).$mount('#app')
