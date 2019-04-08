<template>
  <div class="button-list">
    <router-link
      v-for="(game, index) of gamesOfLocation($route.params.location)"
      :key="game.date"
      :to="{
        name: 'locationNextListGame',
        params: {
          location: $route.params.location,
          game_index: index,
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
  name: 'LocationNextList',
  mixins: [breadcrumbView],
  computed: mapGetters([
    'gamesOfLocation',
  ]),
  methods: {
    formatDate,
    formatTeams,
  },
};
</script>
