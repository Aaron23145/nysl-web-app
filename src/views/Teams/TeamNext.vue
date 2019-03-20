<template>
  <div>
    Team Next Game
    {{ $route.params.team }}
  </div>
</template>

<script>
import { breadcrumbView } from '../../mixins.js'

export default {
  name: 'TeamNext',
  mixins: [breadcrumbView]
}
</script>
