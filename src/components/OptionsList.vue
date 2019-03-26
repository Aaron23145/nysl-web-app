<template>
  <div class="flex-button-column">
    <router-link
      v-for="item of list"
      :key="item"
      :to="{ name: nextView, params: {[paramName]: item} }"
      tag="button"
      class="button button--small"
    >
      <slot :item="item" />
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'OptionList',
  props: {
    list: {
      type: Array,
      required: true
    },
    nextView: {
      type: String,
      required: true
    },
    paramName: {
      type: String,
      required: true
    }
  }
}
</script>
