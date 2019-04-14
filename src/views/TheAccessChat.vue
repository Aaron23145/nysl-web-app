<template>
  <div>
    <router-link
      tag="button"
      :to="{ name: 'signup' }"
      class="button"
    >
      Sign Up
    </router-link>
    <router-link
      tag="button"
      :to="{ name: 'login' }"
      class="button"
    >
      Login
    </router-link>
  </div>
</template>

<script>
import { breadcrumbView } from '../mixins';

export default {
  name: 'TheAccessChat',
  mixins: [breadcrumbView],
};
</script>
