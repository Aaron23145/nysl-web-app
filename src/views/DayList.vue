<template>
  <div>
    Day List
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'DayList',
  data () {
    return {
      depth: 0,
      displayedName: 'Days',
      pathName: 'dayList'
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
