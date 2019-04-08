<template>
  <router-link
    v-if="list.length > 1"
    :to="toList"
    tag="button"
    class="button button--small"
  >
    <slot />
  </router-link>
  <router-link
    v-else
    :to="toDetail"
    tag="button"
    class="button button--small"
  >
    <slot />
  </router-link>
</template>

<script>
export default {
  name: 'LinkToListOrDetail',
  props: {
    list: {
      type: Array,
      required: true,
    },
    toList: {
      type: Object,
      required: true,
    },
    toDetail: {
      type: Object,
      required: true,
    },
  },
};
</script>
