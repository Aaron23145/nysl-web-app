<template>
  <div>
    Location List
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'LocationList',
  data () {
    return {
      depth: 0,
      displayedName: 'Locations',
      pathName: 'locationList'
    }
  },
  methods: mapActions([
    'setView'
  ]),
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.setView(vm)
    })
  }
}
</script>

<style>
</style>
