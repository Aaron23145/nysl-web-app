<template>
  <GameDetail
    :game="gamesOfLocation($route.params.location)[0]"
    from="location"
  />
</template>

<script>
import { mapGetters } from 'vuex'

import { breadcrumbView } from '../../mixins.js'
import GameDetail from '../../components/GameDetail'

export default {
  name: 'LocationNext',
  components: {
    GameDetail
  },
  mixins: [breadcrumbView],
  computed: mapGetters([
    'gamesOfLocation'
  ])
}
</script>
