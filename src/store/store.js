import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    uid: '',
    token: ''
  },
  mutations: {
    setUid (state, v) {
      state.uid = v
    },
    setToken (state, v) {
      state.token = v
    }
  }
})
