<template>
  <div class="the-chat">
    <TheChatMessagesContainer
      :messages="messages"
      :error="chatError"
    />
    <TheChatInputBar @sendMessage="sendMessage" />
  </div>
</template>

<script>
import axios from 'axios';
import { mapState } from 'vuex';

import { breadcrumbView } from '../mixins';
import TheChatInputBar from '../components/TheChatInputBar.vue';
import TheChatMessagesContainer from '../components/TheChatMessagesContainer.vue';

const CHAT_MESSAGES_URI = 'https://nysl-rest-api.herokuapp.com/chat/';
const CHAT_SEND_MESSAGES_URI = 'https://nysl-rest-api.herokuapp.com/chat/send/';

export default {
  name: 'TheChat',
  components: {
    TheChatInputBar,
    TheChatMessagesContainer,
  },
  mixins: [breadcrumbView],
  data() {
    return {
      messages: null,
      chatError: null,
    };
  },
  computed: mapState([
    'login',
  ]),
  created() {
    this.getChatMessages();
    setInterval(this.getChatMessages, 1000 * 60 * 10);
  },
  methods: {
    getChatMessages() {
      axios.get(CHAT_MESSAGES_URI, {
        headers: {
          'x-access-token': this.login.token,
        },
      }).then((response) => {
        this.chatError = null;
        this.messages = (
          response.data.result.messagesFound ? response.data.result.messagesFound.reverse() : []
        );
      }).catch((err) => {
        this.chatError = err.response.status;
      });
    },
    sendMessage(message) {
      axios.post(CHAT_SEND_MESSAGES_URI, {
        content: message,
      }, {
        headers: {
          'x-access-token': this.login.token,
        },
      }).then(() => {
        this.chatError = null;
        this.getChatMessages();
      }).catch((err) => {
        this.chatError = err.response.status;
      });
    },
  },
};
</script>

<style>
.the-chat {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
