<template>
  <div>
    <router-link
      v-for="(game, index) of gamesOfLocation($route.params.location).slice(1)"
      :key="game.date"
      :to="{ name: 'locationNextListGame', params: { location: $route.params.location, game_index: index + 1 } }"
      tag="button"
      class="button button--small"
    >
      {{ formatTeams(game.teams) }} - {{ formatDate(game.date) }}
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import { breadcrumbView } from '../../mixins.js'
import { formatDate, formatTeams } from '../../utils.js'

export default {
  name: 'LocationNextList',
  components: {
  },
  mixins: [breadcrumbView],
  computed: mapGetters([
    'gamesOfLocation'
  ]),
  methods: {
    formatDate,
    formatTeams
  }
}
</script>
