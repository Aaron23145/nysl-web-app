<template>
  <div class="message-entry">
    <div class="message-entry__content">
      {{ message.content }}
    </div>
    <div class="message-entry__author">
      {{ message.userName }}
    </div>
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
  display: flex;
  justify-content: space-between;

  background: var(--main-dark-pink);
  border: solid 1px var(--main-pink);
  border-radius: 5px;
  color: white;
  padding: 20px 10px;
  margin: 10px 0;
}

.message-entry__content {
  flex-grow: 1;
  margin-right: 10px;
}

.message-entry__author {
  white-space: nowrap;
}
</style>
