// 配置路由的地方
import Vue from "vue";
import vueRouter from 'vue-router'
// 使用插件
Vue.use(vueRouter)
import Home from '@/pages/Home/index.vue'
import Register from '@/pages/Register/index'
import Login from '@/pages/Login/index'
import Search from '@/pages/Search/index'
import ShopCar from '@/pages/ShopCar/index'
import Payzhifu from '@/pages/Payzhifu/index'
import Paysuccess from '@/pages/Paysuccess/index'
import VueRouter from "vue-router";


let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace
VueRouter.prototype.push = function (location,resolve,reject) {
  if (resolve && reject) {
    originPush.call(this,location,resolve,reject)
  } else {
    originPush.call(this,location,()=>{},()=>{})
  }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this,location,resolve,reject)
  } else {
    originReplace.call(this,location,()=>{},()=>{})
  }
}

const router = new vueRouter({
  routes: [
    {path: '',redirect:'/home'},
    { path: '/home', component: Home, meta:{show:true} },
    { path: '/register', component: Register,meta:{show:false} },
    { path: '/login', component: Login,meta:{show:false} },
    { path: '/search/:keyword?', component: Search, meta: { show: true }, name: 'search' },
    { path: '/shopcar', component: ShopCar },
    { path: '/payzhifu', component: Payzhifu },
    { path: '/paysuccess', component: Paysuccess}
]}
)
// 配置路由
export default router