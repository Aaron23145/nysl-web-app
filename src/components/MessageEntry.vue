<template>
  <div class="message-entry">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'MessageEntry',
  props: {
    message: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.message-entry {
  background: var(--main-dark-pink);
  border: solid 1px var(--main-pink);
  border-radius: 5px;
  color: white;
  padding: 20px 10px;
  margin: 10px 0;
}
</style>
