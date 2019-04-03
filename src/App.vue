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
        This app doesn't support tablet or desktop sized screens or landscape mode.
        If you're in desktop, you can
        <a
          href="https://developers.google.com/web/tools/chrome-devtools/device-mode/"
          target="_blank"
          rel="noreferrer noopener"
        >
          Simulate Mobile Devices with Device Mode
        </a>.
      </div>
    </div>
  </div>
</template>

<script>
import TheTitles from './components/TheTitles'
import TheBreadcrumb from './components/TheBreadcrumb'
import TheView from './components/TheView'

import { mapState, mapMutations } from 'vuex'
import axios from 'axios'

const API_URL = 'https://nysl-rest-api.herokuapp.com/'

export default {
  name: 'App',
  components: {
    TheTitles,
    TheBreadcrumb,
    TheView
  },
  computed: mapState([
    'status'
  ]),
  created () {
    if (this.status === 'loading') {
      this.$router.replace({ name: 'loading' })

      axios.get(API_URL).then(response => {
        this.dataLoaded()
        this.saveData(response.data)
        this.$router.replace({ name: 'home' })
      }).catch(error => {
        this.dataError()
        console.error('An error ocurred:')
        console.error(error)
        this.$router.replace({ name: 'errorNetwork' })
      })
    } else if (this.status === 'error') {
      this.$router.replace({ name: 'errorNetwork' })
    }
  },
  methods: mapMutations([
    'dataLoaded',
    'dataError',
    'saveData'
  ])
}
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

.valid-device {
  display: flex;
  flex-direction: column;
}

.invalid-device {
  display: none;
}

@media (min-width: 768px), (orientation: landscape) {
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

.button--small {
  font-size: 1.2rem;
  height: 7vh;
  margin-top: 5px;
  margin-bottom: 5px;
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
</style>
