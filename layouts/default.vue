<template>
  <div id="app">
    <LayoutNav />

    <Nuxt class="Body" />

    <vue-progress-bar />
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import LayoutNav from '~/components/Layout/Nav.vue'

const { mapGetters } = createNamespacedHelpers('wait')

export default {
  name: 'LayoutDefault',
  head() {
    return {
      script: [
        {
          src:
            'https://maps.googleapis.com/maps/api/js?key=AIzaSyB8Yb93ioJL0aDegwvbHf4xl--QUHSUf2M&libraries=drawing'
        }
      ]
    }
  },
  components: {
    LayoutNav
  },
  computed: {
    ...mapGetters(['any'])
  },
  watch: {
    any(isLoaded) {
      this.$Progress[isLoaded ? 'start' : 'finish']()
    }
  }
}
</script>

<style scoped>
.Body {
  padding: 1em;
}
</style>
