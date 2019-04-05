<template>
  <div class="button-list">
    <router-link
      v-for="location of locations"
      :key="location"
      :to="{ name: 'locationNext', params: {location} }"
      tag="button"
      class="button button--small"
    >
      {{ location }}
    </router-link>
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
