<template>
  <div class="the-view">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'TheView',
};
</script>

<style>
.the-view {
  margin: 10px 10px 0;
  flex: 1;
  overflow: hidden;
  position: relative;
}
</style>
