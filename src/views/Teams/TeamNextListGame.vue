<template>
  <GameDetail
    :game="gamesOfTeam($route.params.team)[$route.params.game_index]"
    :next-view="{ name: 'teamNextList', params: { team: $route.params.team } }"
  />
</template>

<script>
import { mapGetters } from 'vuex';

import { breadcrumbView } from '../../mixins';
import GameDetail from '../../components/GameDetail.vue';

export default {
  name: 'TeamNextListGame',
  components: {
    GameDetail,
  },
  mixins: [breadcrumbView],
  computed: mapGetters([
    'gamesOfTeam',
  ]),
};
</script>
