<template>
  <GameDetail
    :game="gamesOfDate($route.params.date)[$route.params.game_index]"
    :next-view="{ name: 'daySelect', params: {date: $route.params.date} }"
  />
</template>

<script>
import { mapGetters } from 'vuex'

import { breadcrumbView } from '../../mixins.js'
import GameDetail from '../../components/GameDetail'

export default {
  name: 'DayNext',
  components: {
    GameDetail
  },
  mixins: [breadcrumbView],
  computed: mapGetters([
    'gamesOfDate'
  ])
}
</script>
