<template>
  <div>
    <button
      v-for="game of gamesOfTeam($route.params.team).slice(1)"
      :key="game.date"
      class="button button--small"
    >
      {{ formatTeams(game.teams) }} - {{ formatDate(game.date) }}
    </button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import { breadcrumbView } from '../../mixins.js'
import { formatDate, formatTeams } from '../../utils.js'

export default {
  name: 'TeamNextList',
  components: {
  },
  mixins: [breadcrumbView],
  computed: mapGetters([
    'gamesOfTeam'
  ]),
  methods: {
    formatDate,
    formatTeams
  }
}
</script>
