<template>
  <div>
    Day List
  </div>
</template>

<script>
import { breadcrumbView } from '../mixins'

export default {
  name: 'DayList',
  mixins: [breadcrumbView],
  data () {
    return {
      viewInfo: {
        depth: 0,
        displayedName: 'Days',
        pathName: 'dayList'
      }
    }
  }
}
</script>

<style>
</style>
