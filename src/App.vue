<template>
  <div class="app">
    <div class="valid-device">
      <header v-if="status === 'ready'">
        <TheTitles />
        <TheBreadcrumb />
      </header>
      <TheView />
    </div>
    <div class="invalid-device">
      <div class="invalid-device__error-msg">
        This app is designed to solve a problem for mobile users to visualize information about the
        NYSL games comfortably. Due to that, this app doesn't support tablet or desktop sized
        screens, because it isn't its goal. However, if you're on desktop, you can press F12 and
        press the button indicated
        <a
          href="https://developers.google.com/web/tools/chrome-devtools/device-mode/#viewport"
          target="_blank"
          rel="noreferrer noopener"
        >here</a>
        to turn on the simulation of mobile devices and try the NYSL web app.
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import axios from 'axios';
import TheTitles from './components/TheTitles.vue';
import TheBreadcrumb from './components/TheBreadcrumb.vue';
import TheView from './components/TheView.vue';

const API_URL = 'https://nysl-rest-api.herokuapp.com/games/';

export default {
  name: 'App',
  components: {
    TheTitles,
    TheBreadcrumb,
    TheView,
  },
  computed: mapState([
    'status',
  ]),
  created() {
    if (this.status === 'loading') {
      this.$router.replace({ name: 'loading' });

      axios.get(API_URL).then((response) => {
        this.dataLoaded();
        this.saveData(response.data.result.gamesFound);
        this.$router.replace({ name: 'home' });
      }).catch((error) => {
        this.dataError();
        console.error('An error ocurred:');
        console.error(error);
        this.$router.replace({ name: 'errorNetwork' });
      });
    } else if (this.status === 'error') {
      this.$router.replace({ name: 'errorNetwork' });
    }
  },
  methods: mapMutations([
    'dataLoaded',
    'dataError',
    'saveData',
  ]),
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Ubuntu');

* {
  box-sizing: border-box;
  user-select: none;
}

:root {
  --main-pink: #E3535D;
  --main-dark-pink: #AF3940;
  --main-blue: #047073;
  --main-light-blue: #67BAB7;
  --main-lighter-blue: #86E0DD;
}

html,
body,
.app,
.valid-device,
.invalid-device {
  height: 100%;
}

body {
  margin: 0;
  font-family: 'Ubuntu', sans-serif;
}

header {
  position: sticky;
  top: 0;
  z-index: 1000;
}

.valid-device {
  display: flex;
  flex-direction: column;
}

.invalid-device {
  display: none;
}

.invalid-device__error-msg {
  color: #BD1919;
  margin: 0 50px;
  text-align: center;
  font-size: 1.5rem;
}

.invalid-device__error-msg a {
  color: #1B6DB9;
  font-weight: bold;
  text-decoration: underline;
}

.button {
  display: block;
  font-size: 1.5rem;
  width: 80%;
  height: 10vh;
  background: var(--main-pink);
  border: 0 solid var(--main-pink);
  border-bottom-color: var(--main-dark-pink);
  border-bottom-width: 4px;
  color: white;
  margin: 25px auto;
}

@media (orientation: landscape) {
  .button {
    height: 20vh;
    width: 45%;
    margin: 5px auto;
  }
}

.button--small {
  font-size: 1.1rem;
  height: 7vh;
  margin-top: 5px;
  margin-bottom: 5px;
}

@media (orientation: landscape) {
  .button--small {
    height: 12.5vh;
    width: 45%;
    margin-left: 5px;
    margin-right: 5px;
  }

  .button-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
}

.button:active {
  border-top-width: 4px;
  border-bottom-width: 0;
}

.button:focus {
  outline: none;
}

.flex-button-column {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.title,
.paragraph,
.list {
  margin: 5px 0;
}

.title {
  text-align: center;
  font-size: 1.5rem;
}

.section-title {
  margin: 25px 0;
  font-size: 1.25rem;
}

.list {
  padding-left: 15px;
  list-style-type: square;
  color: var(--main-blue);
}

.list > li {
  margin-bottom: 5px;
}

.list > li > span {
  color: black;
}

label {
  display: block;
  text-align: center;
}

input[type="text"],
input[type="password"] {
  display: block;
  width: 100%;
  margin: 0 auto;
}

input[type="submit"] {
  display: block;
  margin: 0 auto;
}

@media (min-width: 768px) and (orientation: portrait), (min-width: 824px) {
  .valid-device {
    display: none;
  }

  .invalid-device {
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
  }
}
</style>
