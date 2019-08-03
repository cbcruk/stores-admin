<template>
  <div class="container">
    <StoresList v-bind="{ items }" />
    <VDialog />
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import StoresList from '~/components/Stores/List.vue'

const { mapGetters } = createNamespacedHelpers('stores')

export default {
  name: 'Stores',
  components: {
    StoresList
  },
  computed: {
    ...mapGetters(['items'])
  },
  async fetch({ store }) {
    await store.dispatch('stores/fetchItems')
  }
}
</script>
