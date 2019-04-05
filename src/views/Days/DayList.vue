<template>
  <div class="button-list">
    <template
      v-for="date of datesWithGames"
    >
      <router-link
        v-if="gamesOfDate(`${date.month}/${date.day}`).length > 1"
        :key="`${date.month}${date.day}`"
        :to="{ name: 'daySelect', params: {date: `${date.month}/${date.day}`} }"
        tag="button"
        class="button button--small"
      >
        {{ date.day }} of {{ formatMonth(date.month) }}
      </router-link>
      <router-link
        v-else
        :key="`${date.month}${date.day}`"
        :to="{ name: 'dayNext', params: { date: `${date.month}/${date.day}`, game_index: 0, one_game: true } }"
        tag="button"
        class="button button--small"
      >
        {{ date.day }} of {{ formatMonth(date.month) }}
      </router-link>
    </template>
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
