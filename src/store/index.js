import Vue from "vue";
import Vuex from "vuex";
// 需要使用插件一次
Vue.use(Vuex)
// 引入小仓库
import home from "./home";
import search from "./search";
import user from "./user/user.js"
import detail from './detail/detail.js'
import shopcart from "./shopcart/shopcart";
import trade from './trade/trade'

export default new Vuex.Store({
   //实现vuex仓库模块式开发存储数据
  modules: {
    home,
    search,
    user,
    detail,
    shopcart,
    trade
  }
})
//使用vuex进行，模块式开发