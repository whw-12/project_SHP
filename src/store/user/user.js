// 引入请求
import { reqGetCode, reqUserRegister, reqUserLogin, reqUserInfo,reqLogOut } from '@/api/index'
import { setToken,getToken,removeToken } from '@/utils/token'
// 登录。注册
const state = {
  code: '',
  token: getToken(),
  userInfo: {}
}
const mutations = {
  GETCODE(state,code) {
    state.code = code
  },
  USERLOGIN(state, token) {
    state.token = token
  },
  GETUSERINFO(state,userInfo) {
    state.userInfo = userInfo
  },
  //清除用户信息
  USERLOGOUT(state) {
    state.token = '';
    state.userInfo = {};
    removeToken()
  }

}
const actions = {
  //获取验证码
  async getCode({commit},phone) {
    const result = await reqGetCode(phone)
    if (result.code == 200) {
      commit("GETCODE", result.data)
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
    }
  },
  //用户注册,没有返回数据不需要三联
  async userRegister({commit},user) {
    const result = await reqUserRegister(user)
    commit
    if (result.code == 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
    }
  },
  //登录
  async userLogin({ commit },data) {
    let result = await reqUserLogin(data)
    //服务器下发的token，用户唯一标识符(uuid)
    //将来经常通过带token找服务器要用户信息进行展示
    if (result.code == 200) {
      commit('USERLOGIN', result.data.token)
      // 持久化存储token
      setToken(result.data.token)
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
    }
  },
  //获取用户信息
  async getUserInfo({ commit }) {
    const result = await reqUserInfo()
    if (result.code == 200) {
      commit('GETUSERINFO', result.data)
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
    }

  },
  //退出登录
  async userLogOut({commit}) {
    let result = await reqLogOut()
    if (result.code == 200) {
      commit('USERLOGOUT')
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
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