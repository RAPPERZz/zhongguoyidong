import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    users: {},
    modelInFn: {}
  },
  // actions: {},
  mutations: {
    // 获取用户信息
    getUserInfo(state, msg) {
      state.users = msg
    },
    // 获取模板ID
    getModel(state, modelObj) {
      state.modelInFn = modelObj
    }
  }
})
export default store
