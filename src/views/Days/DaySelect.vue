<template>
  <div>
    <router-link
      v-for="(game, index) of gamesOfDate($route.params.date)"
      :key="game.location"
      :to="{ name: 'dayNext', params: {date: $route.params.date, game_index: index} }"
      tag="button"
      class="button button--small"
    >
      {{ formatTeams(game.teams) }}
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import { breadcrumbView } from '../../mixins.js'
import { formatTeams } from '../../utils.js'

export default {
  name: 'DaySelect',
  mixins: [breadcrumbView],
  computed: mapGetters([
    'gamesOfDate'
  ]),
  methods: {
    formatTeams
  }
}
</script>
