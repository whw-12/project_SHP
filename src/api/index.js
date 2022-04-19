// 当前的这个模块:对所有的api接口进行统一的管理
import requests from "./request";
import mockRequest from './mockAjax.js'

// 三级联动接口
// /api/product/getBaseCategoryList get请求 无参数
//http://39.98.123.211
//向外按需抛出一个reqCategoryList函数，其他模块一调用reqCategoryList函数，就会执行此函数里的箭头函数
export const reqCategoryList = () => {
  // 发请求:axios发请求返回的结果是promise对象
  return requests({url:'/product/getBaseCategoryList',method:'get'})
}
//跨域问题：协议、域名、端口号不同的请求，称之为跨域请求
// 如何解决跨域问题？JSONP 、【代理】、CROS
// 用代理解决跨域问题
//在webpack.config.js即是在vue.config.js中配置，进而解决跨域问题
//代理跨域
// devServer: {
//   proxy: {
//     '/api': {
//       target: 'http://39.98.123.211',
//       pathRewrite: {'^/api': ''}
//     }
//   }
// }
//获取banner （home）主页轮播图接口mock
export const reqGetBannerList = () => mockRequest.get('/banner')
export const reqGetFloorList = () => mockRequest.get('/floor')
export const reqGetSearchInfo = (params) => requests({
  url: '/list',
  method: 'post',
  data: params
})
// 获取验证码
export const reqGetCode = (phone) => requests({
  url: `/user/passport/sendCode/${phone}`,
  method: 'GET'
})
//注册接口
export const reqUserRegister = (data) => requests({
  url: '/user/passport/register',
  data,
  method: 'POST'
})
//登录接口
export const reqUserLogin = (data) => requests({
  url: '/user/passport/login',
  data,
  method: 'POST',
})
//获取商品详情
export const reqGoodsInfo = (skuId) => requests({
  url: `/item/${skuId}`,
  method: 'GET'
})
//将产品添加到购物车中(获取更新某个产品的个数)
export const reqAddOrUpdateShopCart = (skuId,skuNum) => requests({
  url: `/cart/addToCart/${skuId}/${skuNum}`,
  method: 'POST'
})
//获取购物车数据
export const reqShopCart = () => requests({
  url: '/cart/cartList',
  method: 'GET'
})
//删除购物车
export const reqDeleteCartById = (skuId) => requests({
  url: `/cart/deleteCart/${skuId}`,
  method: 'DELETE'
})
//修改产品状态
export const reqUpdateStatusCartById = (skuId,isChecked) => requests({
  url: `/cart/checkCart/${skuId}/${isChecked}`,
  method: 'GET'
})
// 获取用户信息
export const reqUserInfo = () => requests({
  url: '/user/passport/auth/getUserInfo',
  method: 'GET'
})

//退出登录
export const reqLogOut = () => requests({
  url: '/user/passport/logout',
  method: 'GET'
})
//获取用户地址信息
export const reqAddressInfo = () => requests({
  url: '/user/userAddress/auth/findUserAddressList',
  method: 'GET'
})
//获取商品清单
export const reqOrderInfo = () => requests({
  url: '/order/auth/trade',
  method: 'get'
})
//提交订单接口
export const reqSubmitOrder = (tradeNo, data) => requests({
  url: `/order/auth/submitOrder?tradeNo=${tradeNo}`,
  data,
  method: 'POST'
})
//获取支付信息
export const reqPayInfo = (orderId) => requests({
  url: `/payment/weixin/createNative/${orderId}`,
  method: 'GET'
})
//获取支付订单状态
export const reqPayStatus = (orderId) => requests({
  url: `/payment/weixin/queryPayStatus/${orderId}`,
  method: 'GET'
})
//
export const reqMyOrderList = (page,limit) => requests({
  url: `order/auth/${page}/${limit}`,
  method: 'get'
})