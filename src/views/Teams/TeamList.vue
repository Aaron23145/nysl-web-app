<template>
  <div class="team-list flex-button-column">
    <router-link
      v-for="team of teams"
      :key="team"
      :to="{ name: 'teamNext', params: {team} }"
      tag="button"
      class="button button--small"
    >
      {{ team }}
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import { breadcrumbView } from '../../mixins'

export default {
  name: 'TeamList',
  mixins: [breadcrumbView],
  computed: mapGetters([
    'teams'
  ])
}
</script>
