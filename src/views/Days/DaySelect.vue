<template>
  <div>
    <button
      v-for="game of gamesOfDate($route.params.date)"
      :key="game.location"
      class="button button--small"
    >
      {{ formatTeams(game.teams) }}
    </button>
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
