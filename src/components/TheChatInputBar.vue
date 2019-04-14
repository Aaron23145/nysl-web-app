<template>
  <form
    class="the-chat-input-bar"
    @submit="sendMessage"
  >
    <input
      v-model="content"
      type="text"
      class="the-chat-input-bar__text"
    >
    <input
      type="submit"
      value="Send"
    >
  </form>
</template>

<script>
export default {
  name: 'TheChatInputBar',
  data() {
    return {
      content: '',
    };
  },
  methods: {
    sendMessage(event) {
      event.preventDefault();
      if (this.content.trim().length) this.$emit('sendMessage', this.content);
      this.content = '';
    },
  },
};
</script>

<style>
.the-chat-input-bar {
  position: absolute;
  bottom: 10px;
  right: 0;
  left: 0;

  display: flex;
  height: 50px;
}

.the-chat-input-bar__text {
  width: initial;
  flex: 1;
}
</style>
