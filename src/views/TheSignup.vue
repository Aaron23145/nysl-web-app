<template>
  <div class="the-signup">
    <h3 class="title">
      Sign Up
    </h3>
    <br>
    <div
      v-if="requestError"
      class="the-signup__error"
    >
      {{ requestError }}
    </div>
    <br>
    <form @submit="signup">
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
        value="Sign Up"
      >
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import { mapMutations } from 'vuex';
import { breadcrumbView } from '../mixins';

const SIGNUP_URI = 'https://nysl-rest-api.herokuapp.com/auth/register/';


export default {
  name: 'TheSignup',
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
    signup(event) {
      event.preventDefault();
      this.requestError = false;

      axios.post(SIGNUP_URI, {
        name: this.username,
        password: this.password,
      }).then((response) => {
        this.setLogin(response.data.result.userCreated);
        this.$router.push({ name: 'chat' });
      }).catch((err) => {
        this.requestError = `Error ${err.response.status}: ${err.response.data.message}`;
      });
    },
  },

};
</script>

<style>
.the-signup__error {
  text-align: center;
  width: 90%;
  margin: 0 auto;
  padding: 5px;
  background: var(--main-pink);
  border: 1px solid var(--main-dark-pink);
  border-radius: 5px;
}
</style>
