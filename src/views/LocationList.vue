<template>
  <div>
    Location List
  </div>
</template>

<script>
import { breadcrumbView } from '../mixins'

export default {
  name: 'LocationList',
  mixins: [breadcrumbView],
  data () {
    return {
      viewInfo: {
        depth: 0,
        displayedName: 'Locations',
        pathName: 'locationList'
      }
    }
  }
}
</script>

<style>
</style>
