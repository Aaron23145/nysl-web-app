<template>
  <div class="home">
    <router-link
      tag="button"
      :to="{ name: 'teamList' }"
      class="button"
    >
      Select your team
    </router-link>
    <router-link
      tag="button"
      :to="{ name: 'dayList' }"
      class="button"
    >
      Select a day
    </router-link>
    <router-link
      tag="button"
      :to="{ name: 'locationList' }"
      class="button"
    >
      Select your location
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style>
@media (orientation: landscape) {
  .home {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
