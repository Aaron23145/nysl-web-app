<template>
  <GameDetail
    :game="gamesOfTeam($route.params.team)[0]"
    from="team"
  />
</template>

<script>
import { mapGetters } from 'vuex'

import { breadcrumbView } from '../../mixins.js'
import GameDetail from '../../components/GameDetail'

export default {
  name: 'TeamNext',
  components: {
    GameDetail
  },
  mixins: [breadcrumbView],
  computed: mapGetters([
    'gamesOfTeam'
  ])
}
</script>
