<template>
  <OptionList
    v-slot:default="slotProps"
    class="team-list"
    :list="teams"
    next-view="teamNext"
    param-name="team"
  >
    {{ slotProps.item }}
  </OptionList>
</template>

<script>
import { mapGetters } from 'vuex'

import { breadcrumbView } from '../../mixins'
import OptionList from '../../components/OptionsList'

export default {
  name: 'TeamList',
  components: {
    OptionList
  },
  mixins: [breadcrumbView],
  computed: mapGetters([
    'teams'
  ])
}
</script>
