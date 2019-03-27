<template>
  <GameDetail
    :game="gamesOfLocation($route.params.location)[$route.params.game_index]"
    :next-view="{ name: 'locationNextList', params: { location: $route.params.location } }"
  />
</template>

<script>
import { mapGetters } from 'vuex'

import { breadcrumbView } from '../../mixins.js'
import GameDetail from '../../components/GameDetail'

export default {
  name: 'LocationNextListGame',
  components: {
    GameDetail
  },
  mixins: [breadcrumbView],
  computed: mapGetters([
    'gamesOfLocation'
  ])
}
</script>
