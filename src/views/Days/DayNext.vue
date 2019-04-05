<template>
  <div class="day-next">
    <GameDetail
      v-if="!$route.params.one_game"
      :game="gamesOfDate($route.params.date)[$route.params.game_index]"
      :next-view="{ name: 'daySelect', params: {date: $route.params.date} }"
    >
      Back
    </GameDetail>
    <GameDetail
      v-else
      :game="gamesOfDate($route.params.date)[$route.params.game_index]"
      :next-view="{ name: 'dayList' }"
    >
      Back
    </GameDetail>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import { breadcrumbView } from '../../mixins';
import GameDetail from '../../components/GameDetail.vue';

export default {
  name: 'DayNext',
  components: {
    GameDetail,
  },
  mixins: [breadcrumbView],
  computed: mapGetters([
    'gamesOfDate',
  ]),
};
</script>

<style>
.day-next {
  height: 100%;
}
</style>
