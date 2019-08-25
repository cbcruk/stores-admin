<template>
  <table class="table">
    <ListHead />
    <ListBody :items="items" />
  </table>
</template>

<script>
import { computed } from '@vue/composition-api'
import ListHead from './List/Head.vue'
import ListBody from './List/Body.vue'

export default {
  name: 'StoresList',
  components: {
    ListHead,
    ListBody
  },
  setup(_, { root }) {
    const items = computed(() => root.$store.getters['stores/items'])
    return { items }
  }
}
</script>
