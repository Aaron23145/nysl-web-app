<template>
  <nav class="the-breadcrumb">
    <router-link to="/">
      Home
    </router-link>
    <router-link to="/about">
      About
    </router-link>
</nav>
</template>

<script>
export default {
  name: 'TheBreadcrumb'
}
</script>

<style>
.the-breadcrumb .router-link-exact-active {
  color: red;
}
</style>
