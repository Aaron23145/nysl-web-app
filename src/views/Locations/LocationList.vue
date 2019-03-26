<template>
  <OptionList
    v-slot:default="slotProps"
    class="location-list"
    :list="locations"
    next-view="locationNext"
    param-name="location"
  >
    {{ slotProps.item }}
  </OptionList>
</template>

<script>
import { mapGetters } from 'vuex'

import { breadcrumbView } from '../../mixins'
import OptionList from '../../components/OptionsList'

export default {
  name: 'LocationList',
  components: {
    OptionList
  },
  mixins: [breadcrumbView],
  computed: mapGetters([
    'locations'
  ])
}
</script>

<style>
</style>
