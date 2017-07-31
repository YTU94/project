import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    uid: '',
    token: '',
    yhj: '',
    allyhj: ''
  },
  mutations: {
    setUid (state, v) {
      state.uid = v
    },
    setToken (state, v) {
      state.token = v
    },
    setYhj (state, v) {
      state.yhj = v
    },
    setAllYhj (state, v) {
      state.allyhj = v
    }
  }
})
