<template>
  <GameDetail
    :game="gamesOfTeam($route.params.team)[0]"
    from="team"
    :next-view="{ name: 'teamNextList', params: { team: $route.params.team } }"
  />
</template>

<script>
import { mapGetters } from 'vuex';

import { breadcrumbView } from '../../mixins';
import GameDetail from '../../components/GameDetail.vue';

export default {
  name: 'TeamNext',
  components: {
    GameDetail,
  },
  mixins: [breadcrumbView],
  computed: mapGetters([
    'gamesOfTeam',
  ]),
};
</script>
