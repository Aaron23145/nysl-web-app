<template>
  <GameDetail
    :game="gamesOfLocation($route.params.location)[0]"
    from="location"
    :next-view="{ name: 'locationNextList', params: { location: $route.params.location } }"
  />
</template>

<script>
import { mapGetters } from 'vuex';

import { breadcrumbView } from '../../mixins';
import GameDetail from '../../components/GameDetail.vue';

export default {
  name: 'LocationNext',
  components: {
    GameDetail,
  },
  mixins: [breadcrumbView],
  computed: mapGetters([
    'gamesOfLocation',
  ]),
};
</script>
