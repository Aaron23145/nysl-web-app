import Vue from 'vue'
import Vuex from 'vuex'
import _ from 'lodash'

import { removeDuplicates } from './utils'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: 'loading',
    data: null,
    breadcrumb: []
  },
  getters: {
    datesWithGames (state) {
      function splitDates (date) {
        const dateSplitted = date.split('/')
        return {
          month: dateSplitted[0],
          day: dateSplitted[1]
        }
      }

      const dates = state.data.map(game => game.date)
      const uniqueDates = removeDuplicates(dates)
      return uniqueDates.map(splitDates)
    },
    teams (state) {
      const teams = state.data.map(game => game.teams)
      const teamList = teams.flat(Infinity)
      const uniqueTeamList = removeDuplicates(teamList)
      return uniqueTeamList.sort()
    },
    locations (state) {
      const locations = state.data.map(game => game.location)
      const uniqueLocations = removeDuplicates(locations)
      return uniqueLocations
    }
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
    setView (context, component) {
      const bc = context.state.breadcrumb
      const view = {
        name: component.viewInfo.displayedName,
        path: component.viewInfo.pathName,
        depth: component.viewInfo.depth,
        params: component.$route && component.$route.params
      }
      const depth = view.depth

      if (((bc[depth] && bc[depth].path) !== view.path) || (bc[depth] && (!_.isEqual(bc[depth].params, view.params)))) {
        context.commit('resetBcToDepth', depth)
        context.commit('addViewToBc', view)
      }
    }
  }
})
