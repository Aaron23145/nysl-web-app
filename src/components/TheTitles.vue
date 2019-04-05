<template>
  <div class="the-titles">
    <h2>Game Information</h2>
    <h1>NYSL</h1>
  </div>
</template>

<script>
export default {
  name: 'TheTitles',
};
</script>

<style>
.the-titles {
  display: flex;
  justify-content: space-between;
  background: var(--main-blue);
  color: white;
  padding: 0 10px;
}

.the-titles h2,
.the-titles h1 {
  margin: 5px 0;
}
</style>
