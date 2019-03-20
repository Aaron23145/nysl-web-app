<template>
  <div class="day-list flex-button-column">
    <button
      v-for="date of datesWithGames"
      :key="`${date.month}${date.day}`"
      class="button button--small"
    >
      {{ date.day }} of {{ formatMonth(date.month) }}
    </button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import { breadcrumbView } from '../../mixins'
import { formatMonth } from '../../utils.js'

export default {
  name: 'DayList',
  mixins: [breadcrumbView],
  computed: {
    ...mapGetters([
      'datesWithGames'
    ])
  },
  methods: {
    formatMonth
  }
}
</script>
