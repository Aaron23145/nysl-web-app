<template>
  <div class="team-list flex-button-column">
    <button
      v-for="team of teams"
      :key="team"
      class="button button--small"
    >
      {{ team }}
    </button>
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
