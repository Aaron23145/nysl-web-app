import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: 'loading',
    data: null
  },
  mutations: {
    dataLoaded (state) {
      state.status = 'ready'
    },
    dataError (state) {
      state.status = 'error'
    },
    saveData (state, newData) {
      state.data = newData
    }
  }
})
