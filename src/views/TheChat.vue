<template>
  <div class="the-chat">
    <TheChatMessagesContainer :messages="messages.reverse()" />
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
    };
  },
  computed: mapState([
    'login',
  ]),
  created() {
    this.getChatMessages();
    setInterval(this.getChatMessages, 1000 * 5);
  },
  methods: {
    getChatMessages() {
      console.log('Getting messages from server');
      axios.get(CHAT_MESSAGES_URI, {
        headers: {
          'x-access-token': this.login.token,
        },
      }).then((response) => {
        this.messages = (
          response.data.result.messagesFound ? response.data.result.messagesFound : []
        );
      }).catch((err) => {
        console.error(err);
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
        this.getChatMessages();
      }).catch((err) => {
        console.error(err);
        console.error(err.response);
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
