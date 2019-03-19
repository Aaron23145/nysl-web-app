<template>
  <div>
    <TheLoading v-if="status === 'loading'" />

    <TheError v-else-if="status === 'error'" />

    <div v-else>
      <header>
        <TheTitles />
        <TheBreadcrumb />
      </header>
      <TheView />
    </div>
  </div>
</template>

<script>
import TheTitles from './components/TheTitles'
import TheBreadcrumb from './components/TheBreadcrumb'
import TheView from './components/TheView'
import TheLoading from './components/TheLoading'
import TheError from './components/TheError'

import { mapState, mapMutations } from 'vuex'
import axios from 'axios'

const API_URL = 'https://nysl-rest-api.herokuapp.com/'

export default {
  name: 'App',
  components: {
    TheTitles,
    TheBreadcrumb,
    TheView,
    TheLoading,
    TheError
  },
  computed: mapState([
    'status'
  ]),
  created () {
    axios.get(API_URL).then(response => {
      this.dataLoaded()
      this.saveData(response.data)
    }).catch(error => {
      this.dataError()
      console.error('An error ocurred:')
      console.error(error)
    })
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
  overflow: hidden;
}

button {
  display: block;
  font-size: 1.5rem;
  padding: 20px;
  background: var(--main-pink);
  border: 0 solid var(--main-pink);
  border-bottom-color: var(--main-dark-pink);
  border-bottom-width: 4px;
  color: white;
}

button:active {
  border-top-width: 4px;
  border-bottom-width: 0;
}

button:focus {
  outline: none;
}
</style>
