import { reqShopCart,reqDeleteCartById,reqUpdateStatusCartById } from "@/api"

const state = {
  cartList: []
}

const mutations = {
  GETCARTLIST(state,cartList) {
    state.cartList = cartList
  }
}

const actions = {
  //获取购物车列表数据
  async getCartList({ commit }) {
    commit;
    let result = await reqShopCart()
    if (result.code == 200) {
      commit('GETCARTLIST', result.data)
    }
  },
  // 删除购物车某一个产品
  async deleteCartById({ commit }, skuId) {
    commit;
    const result = await reqDeleteCartById(skuId)
    if (result.code == 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error("faile"))
    }
  },
  // 修改购物车某一个产品的选中状态
  async statusCartById({ commit }, { skuId, isChecked }) {
    commit;
    let result = await reqUpdateStatusCartById(skuId, isChecked)
    if (result.code == 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
    }
  },
  // 删除全部勾选的产品
  deleteAllCheckedStatus({ dispatch, getters }) {
    let promiseAll = []
    getters.cartList.cartInfoList.forEach(item => {
      let promise = item.isChecked == 1 ? dispatch('deleteCartById', item.skuId) : ''
      promiseAll.push(promise)
    });
    return Promise.all(promiseAll)
  },
  //全部产品的状态
  updateAllCartChecked2({ dispatch, state }, isChecked) {
    let promiseAll = []
    state.cartList[0].cartInfoList.forEach(item => {
      let promise = dispatch('statusCartById', { skuId: item.skuId, isChecked })
      promiseAll.push(promise)
    })
    return Promise.all(promiseAll)

  }
}

const getters = {
  cartList(state) {
    return state.cartList[0] || {}
  }

}

export default {
  state,
  mutations,
  actions,
  getters
}