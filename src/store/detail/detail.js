import {reqGoodsInfo,reqAddOrUpdateShopCart} from  '@/api'
import {getUUID} from '@/utils/uuid_token'

const state = {
  goodInfo: {},
  uuid_token:getUUID()
}

const mutations = {
  GETGOODSINFO(state, goodInfo) {
    state.goodInfo = goodInfo
  }
}

const actions = {
  async getGoodsInfo({ commit },skuId) {
    let result = await reqGoodsInfo(skuId)
    if (result.code == 200) {
      commit('GETGOODSINFO',result.data)
    }
  },
  async addOrUpdateShopCart({ commit }, { skuId, skuNum }) {
    commit
    const result = await reqAddOrUpdateShopCart(skuId, skuNum)
    if (result.code == 200) return 'ok'
    else return Promise.reject(new Error('falie'))
    }
}

const getters = {
  categoryView(state) {
    return state.goodInfo.categoryView || {}
  },
  skuInfo(state) {
    return state.goodInfo.skuInfo || {}
  },
  spuSaleAttrList(state) {
    return state.goodInfo.spuSaleAttrList || []
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}