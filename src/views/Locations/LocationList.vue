<template>
  <div class="location-list flex-button-column">
    <button
      v-for="location of locations"
      :key="location"
      class="button button--small"
    >
      {{ location }}
    </button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import { breadcrumbView } from '../../mixins'

export default {
  name: 'LocationList',
  mixins: [breadcrumbView],
  computed: mapGetters([
    'locations'
  ])
}
</script>

<style>
</style>
