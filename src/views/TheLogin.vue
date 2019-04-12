<template>
  <div class="the-login">
    <h3 class="title">
      Login
    </h3>
    <br>
    <div class="the-login__error" v-if="requestError">
      {{ requestError }}
    </div>
    <br>
    <form @submit="login">
      <label for="username">Username</label>
      <input
        id="username"
        v-model="username"
        type="text"
        required
      >
      <br>
      <label for="password">Password</label>
      <input
        id="password"
        v-model="password"
        type="password"
        required
      >
      <br>
      <input
        type="submit"
        value="Login"
      >
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import { mapMutations } from 'vuex';
import { breadcrumbView } from '../mixins';

const LOGIN_URI = 'https://nysl-rest-api.herokuapp.com/auth/login/';

export default {
  name: 'TheLogin',
  mixins: [breadcrumbView],
  data() {
    return {
      requestError: false,
      username: '',
      password: '',
    };
  },
  methods: {
    ...mapMutations([
      'setLogin',
    ]),
    login(event) {
      event.preventDefault();

      axios.post(LOGIN_URI, {
        name: this.username,
        password: this.password,
      }).then((response) => {
        this.setLogin(response.data.result.userVerified);
        this.$router.push({ name: 'chat' });
        this.requestError = false;
      }).catch((err) => {
        this.requestError = `Error ${err.response.status}: ${err.response.data.message}`;
      });
    },
  },
};
</script>

<style>
.the-login__error {
  text-align: center;
  width: 90%;
  margin: 0 auto;
  padding: 5px;
  background: var(--main-pink);
  border: 1px solid var(--main-dark-pink);
  border-radius: 5px;
}

@media (orientation: landscape) {
  .the-login__error {
    width: 50%;
  }
}
</style>
