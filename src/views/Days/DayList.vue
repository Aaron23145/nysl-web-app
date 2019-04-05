<template>
  <div>
    <span
      v-for="date of datesWithGames"
      :key="`${date.month}${date.day}`"
    >
      <router-link
        v-if="gamesOfDate(`${date.month}/${date.day}`).length > 1"
        :to="{ name: 'daySelect', params: {date: `${date.month}/${date.day}`} }"
        tag="button"
        class="button button--small"
      >
        {{ date.day }} of {{ formatMonth(date.month) }}
      </router-link>
      <router-link
        v-else
        :to="{ name: 'dayNext', params: { date: `${date.month}/${date.day}`, game_index: 0, one_game: true } }"
        tag="button"
        class="button button--small"
      >
        {{ date.day }} of {{ formatMonth(date.month) }}
      </router-link>
    </span>
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
      'datesWithGames',
      'gamesOfDate'
    ])
  },
  methods: {
    formatMonth
  }
}
</script>
