<template>
  <div>
    Team List
  </div>
</template>

<script>
import { mapActions } from 'vuex'

const componentName = 'TeamList'

export default {
  name: componentName,
  data () {
    return {
      depth: 0,
      displayedName: 'Teams',
      pathName: 'teamList'
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
