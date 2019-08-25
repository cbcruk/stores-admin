<template>
  <div class="container">
    <StoresList />
    <VDialog />
  </div>
</template>

<script>
import StoresList from '~/components/Stores/List.vue'

export default {
  name: 'Stores',
  components: {
    StoresList
  },
  async fetch({ store }) {
    await store.dispatch('stores/fetchItems')
  }
}
</script>
