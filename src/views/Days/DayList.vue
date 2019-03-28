<template>
  <div>
    <router-link
      v-for="date of datesWithGames"
      :key="`${date.month}${date.day}`"
      :to="{ name: 'daySelect', params: {date: `${date.month}/${date.day}`} }"
      tag="button"
      class="button button--small"
    >
      {{ date.day }} of {{ formatMonth(date.month) }}
    </router-link>
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
