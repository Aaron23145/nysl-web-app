<template>
  <div class="app">
    <header>
      <TheTitles />
      <TheBreadcrumb />
    </header>
    <router-view />
  </div>
</template>

<script>
import TheTitles from './components/TheTitles'
import TheBreadcrumb from './components/TheBreadcrumb'

export default {
  name: 'App',
  components: {
    TheTitles,
    TheBreadcrumb
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Ubuntu');

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: 'Ubuntu', sans-serif;
}

.app {
  margin: 0 10px;
}
</style>
