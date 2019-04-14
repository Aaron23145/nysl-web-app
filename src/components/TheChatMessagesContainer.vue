<template>
  <div class="the-chat-messages-container">
    <div
      v-if="messages === null || !messages.length"
      class="the-chat-messages-container__no-data"
    >
      <template v-if="messages === null">
        Loading...
      </template>
      <template v-else>
        No messages found. Be the first to send a message!
      </template>
    </div>
    <div
      v-else
      class="the-chat-messages-container__data"
    >
      <MessageEntry
        v-for="(message, index) of messages"
        :key="index"
        :message="message"
      />
    </div>
  </div>
</template>

<script>
import MessageEntry from './MessageEntry.vue';

export default {
  name: 'TheChatMessagesContainer',
  components: {
    MessageEntry,
  },
  props: {
    messages: {
      type: Array,
      default: null,
    },
  },
};
</script>

<style>
.the-chat-messages-container {
  height: calc(100vh - 160px);
  overflow: auto;
}

.the-chat-messages-container__no-data {
  text-align: center;
}
</style>
