<template>
  <div>
    Team List
  </div>
</template>

<script>
import { breadcrumbView } from '../mixins'

export default {
  name: 'TeamList',
  mixins: [breadcrumbView],
  data () {
    return {
      viewInfo: {
        depth: 0,
        displayedName: 'Teams',
        pathName: 'teamList'
      }
    }
  }
}
</script>

<style>
</style>
