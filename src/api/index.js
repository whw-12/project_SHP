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