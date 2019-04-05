<template>
  <div class="button-list">
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
  created () {
    if (this.gamesOfDate(this.$route.params.date).length === 1) {
      this.$router.push({ name: 'dayNext', params: { date: this.$route.params.date, game_index: 0, one_game: true } })
    }
  },
  methods: {
    formatTeams
  }
}
</script>
