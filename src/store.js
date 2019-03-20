import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: 'loading',
    data: null,
    breadcrumb: []
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
    },
    resetBcToDepth (state, depth) {
      const onlyLessThan = (entry, index) => index < depth
      state.breadcrumb = state.breadcrumb.filter(onlyLessThan)
    },
    addViewToBc (state, view) {
      state.breadcrumb.push(view)
    }
  },
  actions: {
    setView (context, receivedView) {
      const bc = context.state.breadcrumb
      const view = {
        name: receivedView.displayedName,
        path: receivedView.pathName,
        depth: receivedView.depth,
        id: receivedView._uid
      }
      const depth = view.depth

      if ((bc[depth] && bc[depth].id) !== view.id) {
        context.commit('resetBcToDepth', depth)
        context.commit('addViewToBc', view)
      }
    }
  }
})
