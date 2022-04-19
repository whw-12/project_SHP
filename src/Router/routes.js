// 引入路由组件-一级路由
// import Home from '@/pages/Home/index.vue'
import Register from '@/pages/Register/index'
import Login from '@/pages/Login/index'
// import Search from '@/pages/Search/index'
// import ShopCar from '@/pages/ShopCar/index'
import Payzhifu from '@/pages/Payzhifu/index'
import Paysuccess from '@/pages/Paysuccess/index'
import Detail from '@/pages/Detail'
import addCartSuccess from '@/pages/addCartSuccess/index'
import Trade from '@/pages/Trade/index'
import Center from '@/pages/Center/index'

//引入二级路由
import myOrder from '@/pages/Center/myOrder'
import groupOrder from '@/pages/Center/groupOrder'

const foo = () => {
  return import('@/pages/Home')
}

export default [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: foo,
    meta: { show: true }
  },
  {
    path: '/register',
    component: Register,
    meta: { show: false }
  },
  {
    path: '/login',
    component: Login,
    meta: { show: false }
  },
  {
    path: '/search/:keyword?',
    component: () => import('@/pages/Search'),
    meta: { show: true },
    name: 'search'
  },
  {
    path: '/shopcar',
    component: () => import('@/pages/ShopCar'),
    meta: { show:true }
  },
  {
    path: '/payzhifu',
    component: Payzhifu,
    meta: { show:true }
  },
  {
    path: '/paysuccess',
    component: Paysuccess,
    meta: { show:true }
  },
  {
    path: '/detail/:skuid',
    component: Detail,
    meta: { show: true }
  },
  {
    path: '/addcartsuccess',
    component: addCartSuccess,
    name: 'addCartSuccess',
    meta: { show: true }
  },
  {
    path: '/trade',
    component: Trade,
    meta: { show:true }
  },
  {
    path: '/center',
    component: Center,
    meta: { show: true },
    //二级路由
    children: [
      {
        path: 'myorder',
        component: myOrder
      },
      {
        path: 'grouporder',
        component: groupOrder
      },
      //重定向
      {
        path: '/center',
        redirect: '/center/myorder'
      }
    ]
  }

]