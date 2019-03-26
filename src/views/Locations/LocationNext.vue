<template>
  <div>
    Location Next Game
    {{ $route.params.location }}
  </div>
</template>

<script>
import { breadcrumbView } from '../../mixins.js'

export default {
  name: 'LocationNext',
  mixins: [breadcrumbView]
}
</script>
