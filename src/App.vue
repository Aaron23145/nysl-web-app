<template>
  <div class="app">
    <header v-if="status === 'ready'">
      <TheTitles />
      <TheBreadcrumb />
    </header>
    <TheView />
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

body {
  margin: 0;
  font-family: 'Ubuntu', sans-serif;
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
