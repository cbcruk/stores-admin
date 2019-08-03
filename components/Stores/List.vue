<template>
  <table class="table">
    <ListHead />
    <ListBody v-bind="$attrs" />
  </table>
</template>

<script>
import ListHead from './List/Head.vue'
import ListBody from './List/Body.vue'

export default {
  name: 'StoresList',
  components: {
    ListHead,
    ListBody
  },
  inheritAttrs: false
}
</script>
