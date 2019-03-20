<template>
  <nav class="the-breadcrumb">
    <router-link
      tag="button"
      to="/"
      class="the-breadcrumb__link"
    >
      <i class="fas fa-home" />
    </router-link>
    <!-- <router-link
      tag="button"
      to="/about"
      class="the-breadcrumb__link"
    >
      About
    </router-link> -->
  </nav>
</template>

<script>
export default {
  name: 'TheBreadcrumb'
}
</script>

<style>
.the-breadcrumb {
  background: var(--main-light-blue);
  padding: 0 10px;
}

button.the-breadcrumb__link {
  color: white;
  display: inline-block;
  border: none;
  text-decoration: none;
  margin: 0 5px;
  padding: 5px 3px 5px 18px;
  position: relative;
  height: 30px;
  outline: none;
}

button.the-breadcrumb__link:not(.router-link-exact-active) {
  background: transparent;
}

.router-link-exact-active {
  color: var(--main-blue);
  background: var(--main-lighter-blue);
}

.router-link-exact-active::before,
.router-link-exact-active::after {
  content: "";
  position: absolute;
  top: 50%;
  border: 15px solid transparent;
}

.router-link-exact-active::before {
  left: 0;
  transform: translateY(-50%);
  border-left-color: var(--main-light-blue);
}

.router-link-exact-active::after {
  right: 0;
  transform: translate(100%, -50%);
  border-left-color: var(--main-lighter-blue);
}
</style>
