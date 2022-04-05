import {reqGetSearchInfo} from '@/api'
//search模块小仓库
const state = {
  //这里是数组或是对象，不能乱写
  //可以去需要数据的组件派发请求来查看到底是数组还是对象
  searchInfo:{}
}
const mutations = {
  GETSEARCHINFO(state, searchInfo) {
    state.searchInfo = searchInfo
  }
}
const actions = {
  async getSearchInfo({ commit }, params={}) {
    //这里这个reqGetSearchInfo这个函数在调用获取服务器数据的时候，至少传递一个参数(空对象)
    //params形参，是当用户派发action的时候，第二个参数传递过来的，至少是一个空对象
    const result = await reqGetSearchInfo(params)
    if (result.code == 200) {
      commit('GETSEARCHINFO',result.data)
    }
  }
}
const getters = {
  goodsList(state) {
    return state.searchInfo.goodsList || []
  },
  trademarkList(state) {
    return state.searchInfo.trademarkList
  },
  attrsList(state) {
    return state.searchInfo.attrsList
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}