import {reqAddressInfo,reqOrderInfo} from '@/api/index'

const state = {
  address: [],
  orderinfo:{}
}

const mutations = {
  GETUSERADDRESS(state, address) {
    state.address = address
  },
  GETORDERINFO(state, orderinfo) {
    state.orderinfo = orderinfo
  }
}

const actions = {
  //获取用户地址信息
  async getUserAddress({ commit }) {
    const result = await reqAddressInfo()
    commit('GETUSERADDRESS',result.data)
  },
  //获取用户购物车商品
  async getOrderInfo( {commit} ) {
    const result = await reqOrderInfo()
    if (result.code == 200) {
      commit('GETORDERINFO',result.data)
    }
  }
    

}

const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}