<template>
  <div class="button-list">
    <router-link
      v-for="(game, index) of gamesOfTeam($route.params.team).slice(1)"
      :key="game.date"
      :to="{
        name: 'teamNextListGame',
        params: {
          team: $route.params.team,
          game_index: index + 1,
        },
      }"
      tag="button"
      class="button button--small"
    >
      {{ formatTeams(game.teams) }} - {{ formatDate(game.date) }}
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import { breadcrumbView } from '../../mixins';
import { formatDate, formatTeams } from '../../utils';

export default {
  name: 'TeamNextList',
  components: {
  },
  mixins: [breadcrumbView],
  computed: mapGetters([
    'gamesOfTeam',
  ]),
  methods: {
    formatDate,
    formatTeams,
  },
};
</script>
