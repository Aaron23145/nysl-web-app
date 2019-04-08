<template>
  <div class="button-list">
    <template
      v-for="date of datesWithGames"
    >
      <LinkToListOrDetail
        :key="`${date.month}${date.day}`"
        :list="gamesOfDate(`${date.month}/${date.day}`)"
        :to-list="{
          name: 'daySelect',
          params: {
            date: `${date.month}/${date.day}`
          },
        }"
        :to-detail="{
          name: 'dayNext',
          params: {
            date: `${date.month}/${date.day}`,
            game_index: 0,
            one_game: true,
          },
        }"
      >
        {{ date.day }} of {{ formatMonth(date.month) }}
      </LinkToListOrDetail>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import { breadcrumbView } from '../../mixins';
import { formatMonth } from '../../utils';
import LinkToListOrDetail from '../../components/LinkToListOrDetail.vue';

export default {
  name: 'DayList',
  components: {
    LinkToListOrDetail,
  },
  mixins: [breadcrumbView],
  computed: {
    ...mapGetters([
      'datesWithGames',
      'gamesOfDate',
    ]),
  },
  methods: {
    formatMonth,
  },
};
</script>
