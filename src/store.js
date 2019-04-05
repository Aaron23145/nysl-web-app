import Vue from 'vue';
import Vuex from 'vuex';
import _ from 'lodash';

import { removeDuplicates } from './utils';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: 'loading',
    data: null,
    breadcrumb: [],
  },
  getters: {
    datesWithGames(state) {
      function splitDates(date) {
        const dateSplitted = date.split('/');
        return {
          month: dateSplitted[0],
          day: dateSplitted[1],
        };
      }

      const dates = state.data.map(game => game.date);
      const uniqueDates = removeDuplicates(dates);
      return uniqueDates.map(splitDates);
    },
    teams(state) {
      const teams = state.data.map(game => game.teams);
      const teamList = teams.flat(Infinity);
      const uniqueTeamList = removeDuplicates(teamList);
      return uniqueTeamList.sort();
    },
    locations(state) {
      const locations = state.data.map(game => game.location);
      const uniqueLocations = removeDuplicates(locations);
      return uniqueLocations;
    },
    gamesOfTeam: state => team => state.data.filter(game => game.teams.includes(team)),
    gamesOfLocation: state => location => state.data.filter(game => game.location === location),
    gamesOfDate: state => date => state.data.filter(game => game.date === date),
  },
  mutations: {
    dataLoaded(state) {
      state.status = 'ready'; // eslint-disable-line no-param-reassign
    },
    dataError(state) {
      state.status = 'error'; // eslint-disable-line no-param-reassign
    },
    saveData(state, newData) {
      state.data = newData; // eslint-disable-line no-param-reassign
    },
    resetBcToDepth(state, depth) {
      const onlyLessThan = (entry, index) => index < depth;
      // eslint-disable-next-line no-param-reassign
      state.breadcrumb = state.breadcrumb.filter(onlyLessThan);
    },
    addViewToBc(state, view) {
      state.breadcrumb.push(view);
    },
  },
  actions: {
    setView(context, component) {
      const bc = context.state.breadcrumb;
      const view = {
        name: component.viewInfo.displayedName,
        path: component.viewInfo.pathName,
        depth: component.viewInfo.depth,
        params: component.$route && component.$route.params,
      };
      const { depth } = view;

      const differentPath = (bc[depth] && bc[depth].path) !== view.path;
      const differentParams = bc[depth] && (!_.isEqual(bc[depth].params, view.params));
      if (differentPath || differentParams) {
        context.commit('resetBcToDepth', depth);
        context.commit('addViewToBc', view);
      }
    },
  },
});
