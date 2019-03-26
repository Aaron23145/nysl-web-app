<template>
  <div class="the-view">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'TheView'
}
</script>

<style>
.the-view {
  margin: 10px;
  /* height: 100%; */
  flex-grow: 1;
}
</style>
