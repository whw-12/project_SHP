// 配置路由的地方
import Vue from "vue";
import vueRouter from 'vue-router'
// 使用插件
Vue.use(vueRouter)
import VueRouter from "vue-router";
import routes from './routes.js'
import store from '@/store'

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
// 配置路由
const router = new vueRouter({
  routes,
  scrollBehavior() {
    // 始终滚动到顶部
    return { y: 0 }
  },
})

//全局守卫，前置守卫
router.beforeEach( async (to,from,next) => {
  next()
  let token = store.state.user.token
  let name = store.state.user.userInfo.name
  if (token) {
    if (to.path == '/login' || to.path == '/register') {
      next('/home')
    } else {
      if (name) {
        next()
      } else {
          //获取用户信息
        try {
            //获取用户信息成功
          await store.dispatch('getUserInfo')
          next()
          } catch (error) {
            //token失效了
          await store.dispatch('userLogOut')
          next('/login')
          }
      }
    }
  } else {
    //未登录不能去交易、支付相关、个人中心
    let topath = to.path
    if (topath.indexOf('/trade') != -1 || topath.indexOf('/pay') != -1 || topath.indexOf('/center') != -1) {
      next(`/login?redirect =` + topath)
      //把未登录的时候想去而没有去成的信息，存在路由中
    } else {
      next()
    }
  }
})
export default router